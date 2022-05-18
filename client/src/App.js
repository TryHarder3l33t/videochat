import React from 'react';
import { AppBar, Container, Grid, Typography } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { grey } from '@mui/material/colors';

const App = () => {
  return (
    <Container maxWidth='xl'>
      <Grid
        container
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          item
          xs={12}
          md={8}
        >
          <AppBar
            sx={{
              bgcolor: grey[900],
              padding: 1,
              margin: '30px 100px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '600px',
            }}
            position='static'
          >
            <Typography color='white' variant='h5' align='center'>
              41 Minutes IYKYK
            </Typography>
          </AppBar>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          item
          xs={12}
          md={8}
        >
          <VideoPlayer />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          item
          xs={12}
          md={8}
        >
          <Options>
            <Notifications />
          </Options>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
