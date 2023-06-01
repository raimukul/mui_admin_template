import { Box, Container } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ViewJobs() {
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
          Posted Opportunities
        </Box>
        <Card sx={{ width: '100%', WebkitBorderRadius: '0px', boxShadow: 'none' }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="InfoText">
                Assistant Manager
              </Typography>
              <Typography variant="body2" color="text.secondary" py={1}>
                <b>Job ID:</b> SISTECH001
              </Typography>
              <Typography variant="body2" color="text.secondary" py={1}>
                <b>Job Location:</b> New Delhi/NCR
              </Typography>
              <Typography variant="body2" color="text.secondary" py={1}>
                <b>No. of Opening:</b> 05
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b className="py-1">Job Description:</b>
                <br />
                Ideally from the hospitality sector.The person will be handling day to day operations & a team of (15-20) people will be
                reporting to the Manager. The (bookings counters for cabs/hotels/lounge area/booking executives) will be under his/her
                supervision.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" id="SharpBorder">
              View/Edit
            </Button>
            <Button size="small" variant="contained" id="SharpBorder" color="error">
              Delete/Inactive
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}
