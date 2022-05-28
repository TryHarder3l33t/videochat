


import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { SocketContext } from '../Context';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

const VideoPlayer = () => {
  const {
    answerNameId,
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    call,
  } = useContext(SocketContext);

  return (
    <Grid
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
      container
    >
      {userVideo && !callEnded && callAccepted && (
        <Grid
          sx={{
            m: 3,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          container
          item
          xs={12}
          md={12}
        >
          {/* Their Video */}{' '}
          <Card sx={{}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[510] }} aria-label='recipe'>
                  42
                </Avatar>
              }
              title={call.name || answerNameId}
            />

            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <video playsInline ref={userVideo} autoPlay />
            </CardContent>
          </Card>
        </Grid>
      )}
      {/* My Video */}
      {myVideo && (
        <Grid
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          container
          item
          xs={12}
          md={12}
        >
          <Card sx={{}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[510] }} aria-label='recipe'>
                  41
                </Avatar>
              }
              title={name || 'John Doe'}
            />

            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <video playsInline muted ref={myVideo} autoPlay />
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
