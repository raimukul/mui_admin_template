import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Card, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import axios from './../../axios';
import { userData } from '../../App';
import FormData from 'form-data';
import { useSnackbar } from 'notistack';

export default function EditProfile() {
  const { enqueueSnackbar } = useSnackbar();

  function handleSnackBar(message, variant) {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    });
  }

  const { token } = React.useContext(userData);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [country, setCountry] = useState('');
  const [aadhaar_card, setAadhaar_card] = useState('');
  const [pan, setPan] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, toggle]);

  const getData = async () => {
    try {
      let response = await axios.get('/accounts/customuser/me', {
        headers: { Authorization: `Token ${token}` }
      });
      // console.log(response.data);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setPhone(response.data.phone.slice(3));
      setAddress(response.data.street_address);
      setCity(response.data.city);
      setState(response.data.state);
      setPin(response.data.postal_code);
      setCountry(response.data.country);
      setAadhaar_card(response.data.aadhaar_card);
      setPan(response.data.pan);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const updateForm = new FormData();

  const submit = async (e) => {
    e.preventDefault();
    try {
      let phoneRegex = new RegExp(/^[0-9]{10}$/);
      let panRegex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
      let aadhaarRegex = new RegExp(/^[0-9]{12}$/);

      if (phoneRegex.test(phone) === false) {
        handleSnackBar('Please enter correct Phone', 'warning');
      } else if (panRegex.test(pan) === false) {
        handleSnackBar('Please enter correct PAN', 'warning');
      } else if (aadhaarRegex.test(aadhaar_card) === false) {
        handleSnackBar('Please enter correct Aadhaar', 'warning');
      } else {
        updateForm.append('first_name', firstName);
        updateForm.append('last_name', lastName);
        updateForm.append('phone', `+91${phone}`);
        updateForm.append('street_address', address);
        updateForm.append('city', city);
        updateForm.append('state', state);
        updateForm.append('postal_code', pin);
        updateForm.append('country', country);
        updateForm.append('aadhaar_card', aadhaar_card);
        updateForm.append('pan', pan);

        let response = await axios.patch('accounts/updateprofile/', updateForm, {
          headers: { Authorization: `Token ${token}` }
        });
        handleSnackBar(response.data.message, 'success');
        setToggle(true);
      }
    } catch (error) {
      handleSnackBar(error.response.data.message, 'error');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <Card sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ pb: 3 }}>
            General information
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField
                fullWidth
                type="tel"
                name="phone"
                label="Phone"
                required
                value={phone}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+91</InputAdornment>
                }}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField fullWidth name="pan" label="PAN" required value={pan} onChange={(e) => setPan(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField
                fullWidth
                name="aadhaar_card"
                label="Aadhaar"
                required
                value={aadhaar_card}
                onChange={(e) => setAadhaar_card(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField fullWidth name="address" label="Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField fullWidth name="city" label="City" required value={city} onChange={(e) => setCity(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField fullWidth name="state" label="State" required value={state} onChange={(e) => setState(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField
                fullWidth
                name="pin-code"
                label="PIN"
                required
                type="number"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} sx={{ p: 2 }}>
              <TextField fullWidth name="country" label="Country" required value={country} onChange={(e) => setCountry(e.target.value)} />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Card>
      </form>
    </div>
  );
}
