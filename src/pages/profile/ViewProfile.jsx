/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Avatar,
  Typography
} from '@mui/material';
import axios from './../../axios';
import { userData } from '../../App';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';

export default function ViewProfile() {
  const { token } = React.useContext(userData);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [aadhaar_card, setAadhaar_card] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [pan, setPan] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [country, setCountry] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, toggle]);

  const getData = async () => {
    try {
      let response = await axios.get('/accounts/customuser/me', {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(response.data);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setPhone(response.data.phone);
      setEmail(response.data.email);
      setAadhaar_card(response.data.aadhaar_card);
      setEmployeeId(response.data.employee_id);
      setPan(response.data.pan);
      setAddress(response.data.street_address);
      setCity(response.data.city);
      setState(response.data.state);
      setPin(response.data.postal_code);
      setCountry(response.data.country);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={3} lg={3} sx={{ p: 2 }}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Avatar sx={{ bgcolor: green[500] }} alt={firstName + ' ' + lastName} src="/broken-image.jpg" />
                <Typography gutterBottom variant="h5">
                  {firstName} {lastName}
                </Typography>
                <Typography color="text.secondary" variant="body1">
                  {employeeId}
                </Typography>
                <Typography color="text.secondary" variant="body1">
                  {email}
                </Typography>
                <Typography color="text.secondary" variant="body1">
                  {city !== null && country !== null ? `${city}, ${country}` : ''}
                </Typography>
              </Box>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                fullWidth
                variant="text"
                color="success"
                onClick={(event) => alert('Sorry, this feature is not available in this phase.')}
              >
                Upload picture
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9} lg={9} sx={{ p: 2 }}>
          <Card>
            <CardHeader subheader="The information can be edited" title="Profile" />
            <CardContent sx={{ pt: 0 }}>
              <Box sx={{ m: -1.5 }}>
                <Grid container spacing={3}>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="First name"
                      name="firstName"
                      value={firstName}
                      InputProps={{
                        readOnly: true
                      }}
                      required
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Last name"
                      name="lastName"
                      value={lastName}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      type="text"
                      value={phone}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Aadhar"
                      name="aadhar"
                      type="text"
                      value={aadhaar_card !== null ? `${aadhaar_card}` : 'Not Provided'}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="PAN"
                      name="pan"
                      type="text"
                      value={pan !== null ? `${pan}` : 'Not Provided'}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      name="address"
                      value={address !== null ? `${address}` : 'Not Provided'}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={city !== null ? `${city}` : 'Not Provided'}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="State"
                      name="state"
                      value={state !== null ? `${state}` : 'Not Provided'}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="PIN Code"
                      name="pin-code"
                      value={pin !== null ? `${pin}` : 'Not Provided'}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Country"
                      name="country"
                      value={country !== null ? `${country}` : 'Not Provided'}
                      required
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="success" onClick={(event) => navigate('/edit-profile')}>
                Edit Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
