import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  console.log('This is the call');
  console.log(call);

  return (
    <>
      {call && call.isReceived && !callAccepted && (
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h6'>{call.name} is calling</Typography>
          <Button variant='contained' color='primary' onClick={answerCall}>
            ANSWER
          </Button>
        </Grid>
      )}
    </>
  );
};

export default Notifications;
