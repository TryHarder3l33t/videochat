import { Box, Button, Grid, Typography } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';
import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall, calling, callEnded } =
    useContext(SocketContext);

  return (
    <div>
      {call && call.isReceived && !callAccepted && calling && (
        <Grid
          container
          sx={{
            my: 2,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
          spacing={1}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Typography sx={{ color: grey[600] }} variant='h6'>
                {call.name} is calling &nbsp;{' '}
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            item
          >
            <Button
              sx={{
                bgcolor: green[900],
                ':hover': {
                  bgcolor: green[700],
                  color: 'white',
                },
                mt: 2,
              }}
              variant='contained'
              onClick={answerCall}
            >
              ANSWER
            </Button>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            item
          >
            <Button
              sx={{
                bgcolor: red[900],
                ':hover': {
                  bgcolor: red[700],
                  color: 'white',
                },
                mt: 2,
              }}
              variant='contained'
              color='secondary'
              onClick={leaveCall}
            >
              Hang Up
            </Button>
          </Grid>
        </Grid>
      )}
      {/* HANG UP */}
      {callAccepted && !callEnded && (
        <Grid
          container
          sx={{
            my: 2,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
          spacing={1}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            item
          >
            <Button
              sx={{
                bgcolor: red[900],
                ':hover': {
                  bgcolor: red[700],
                  color: 'white',
                },
                mt: 2,
              }}
              variant='contained'
              color='secondary'
              onClick={leaveCall}
            >
              Hang Up
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Notifications;
