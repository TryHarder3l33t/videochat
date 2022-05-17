import { Grid, Paper, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const VideoPlayer = () => {
  //Contains all the SocketContext Stuff
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Grid sx={{ justifyContent: 'center' }} container>
      {/* Your Video */}
      {myVideo && (
        <Paper
          sx={{ padding: '10px', border: '2px solid black', margin: '10px' }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant='h6'>{name || 'John Doe'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay />
          </Grid>
        </Paper>
      )}

      {/* Their Video */}
      {callAccepted && !callEnded && (
        <Paper
          sx={{ padding: '10px', border: '2px solid black', margin: '10px' }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant='h6'> {call.name || 'Anon'}</Typography>
            <video playsInline muted ref={userVideo} autoPlay />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
