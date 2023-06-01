import React from 'react';
import { Box, Button, Card, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import SunEditor from 'suneditor-react';
import { userData } from '../../App';
import axios from 'axios';

export default function AddJob() {
  // eslint-disable-next-line no-unused-vars
  const { token, dispatch, userDetails } = React.useContext(userData);
  const [jobType, setJobType] = React.useState('');
  const [jobLocation, setJobLocation] = React.useState('');
  const [numberOfOpening, setNumberOfOpening] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [title, setTitle] = React.useState('');

  // console.log(token);

  const handleJobLocation = (event) => {
    setJobLocation(event.target.value);
  };
  const handleChange = (event) => {
    setJobType(event.target.value);
  };

  const handleOpening = (event) => {
    setNumberOfOpening(event.target.value);
  };

  // jobTitle:
  // jobId
  // jobDescription:
  // jobLocation:
  // jobType,
  // jobOpening
  const jobsPost = async () => {
    try {
      const response = await axios.post('/api/job/create', {
        headers: { Authorization: `Token ${token}` },
        data: {
          jobType: jobType,
          jobLocation: jobLocation,
          jobOpening: numberOfOpening,
          jobDescription: description,
          jobTitle: title
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="py-2">
        <Box
          sx={{
            p: 1,
            mb: 3,
            mt: 1,
            fontSize: 'h4',
            color: '#1890ff',
            width: 'fit-content',
            blockSize: 'fit-content',
            textAlign: 'center',
            backgroundColor: '#e6f7ff'
          }}
        >
          Post an opportunity or internship
        </Box>
        <Card sx={{ p: 2 }}>
          <form>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} sm={6} lg={6} sx={{ mt: 2 }}>
                <FormControl fullWidth>
                  <TextField
                    label="Job Title"
                    id="job-title"
                    helperText="Example: Full Stack Developer, HR, UI Developer etc."
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} lg={6} sx={{ mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobType}
                    label="Job Type"
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value={10}>Full-Time</MenuItem>
                    <MenuItem value={20}>Part-Time</MenuItem>
                    <MenuItem value={30}>Internship</MenuItem>
                  </Select>
                  <FormHelperText>Please select job type.</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} lg={6} sx={{ mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Job Location</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobLocation}
                    label="Job Type"
                    onChange={handleJobLocation}
                    fullWidth
                  >
                    <MenuItem value="Onsite/New Delhi">Onsite/New Delhi</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="Hybrid">Hybrid</MenuItem>
                  </Select>
                  <FormHelperText>Please select job location.</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} lg={6} sx={{ mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="no-of-opening">Number of Openings</InputLabel>
                  <Select labelId="no-of-opening" id="number-opening" value={jobType} label="Job Type" onChange={handleOpening} fullWidth>
                    <MenuItem value={1 - 5}>1-5</MenuItem>
                    <MenuItem value={6 - 10}>6-10</MenuItem>
                    <MenuItem value={11 - 20}>11-20</MenuItem>
                  </Select>
                  <FormHelperText>Please select range of openings.</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} sx={{ mt: 2 }}>
                <InputLabel id="job-description">Job Description</InputLabel>
                <SunEditor onChange={(e) => setDescription(e.target.value)} />
              </Grid>
            </Grid>
            <Box sx={{ pt: 5 }}>
              <Button variant="contained" id="SharpBorder" onClick={() => jobsPost()}>
                Post Job
              </Button>
            </Box>
          </form>
        </Card>
      </Container>
    </div>
  );
}
