import React from 'react';
import { AppBar, Container, Grid, Typography } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container sx={{ alignContent: 'center', justifyContent: 'center' }}>
        <AppBar
          sx={{
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
            Video Player
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </Grid>
    </Container>
  );
};

export default App;
