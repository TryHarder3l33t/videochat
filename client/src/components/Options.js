import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { SocketContext } from '../Context';
import CopyToClipboard from 'react-copy-to-clipboard';
import { grey } from '@mui/material/colors';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

const Options = ({ children }) => {
  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  //   console.log('This is idToCall');
  //   console.log(idToCall);
  //   console.log(me && me);

  //children off of props lets you render whatever is in that component ie notifications
  return (
    <Container
      sx={{
        width: '600px',
        margin: '35px 0',
        padding: 0,
      }}
      maxWidth='xl'
    >
      <Paper
        sx={{ padding: '10px 20px', border: '2px solid black' }}
        elevation={10}
      >
        <form noValidate autoComplete='off'>
          <Grid
            container
            sx={{
              width: '100%',
            }}
          >
            <Grid sx={{ padding: '20' }} item xs={12} md={6}>
              <Typography gutterBottom variant='h6'>
                Account Info
              </Typography>

              <TextField
                label='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              ></TextField>

              <CopyToClipboard sx={{ mt: 2 }} text={me}>
                <Button
                  sx={{
                    bgcolor: 'black',
                    ':hover': {
                      bgcolor: grey[800],
                      color: 'red',
                    },
                  }}
                  variant='contained'
                  fullWidth
                  startIcon={<Assignment fontSize='large' />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid sx={{ padding: '20' }} item xs={12} md={6}>
              <Typography gutterBottom variant='h6'>
                Make A Call
              </Typography>
              <TextField
                label='ID to Call'
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              ></TextField>
              {callAccepted && !callEnded ? (
                <Button
                  sx={{ margin: 2 }}
                  variant='contained'
                  color='secondary'
                  onClick={leaveCall}
                  startIcon={<PhoneDisabled fontSize='large' fullWidth />}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  sx={{ margin: 2 }}
                  onClick={(ev) => callUser(idToCall, ev)}
                  fullWidth
                  variant='contained'
                  color='primary'
                  startIcon={<Phone fontSize='large' />}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
