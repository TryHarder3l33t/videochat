import {
  Box,
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
import { green, grey } from '@mui/material/colors';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const Options = ({ children }) => {
  let params = useParams();
  const {
    serverInfo,
    callAccepted,
    callEnded,
    name,
    setName,
    leaveCall,
    callUser,
    url,
    calling,
    call,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState(params && params.id);

  return (
    <Container
      sx={{
        width: '600px',
        padding: 0,
      }}
      maxWidth='xl'
    >
      {!call.isReceived && !callAccepted && !calling && (
        <Paper sx={{ padding: '10px 10px' }} elevation={0}>
          <form noValidate autoComplete='off'>
            <Grid
              container
              sx={{
                width: '100%',
              }}
              spacing={2}
            >
              <Grid sx={{ padding: '20' }} item xs={12} md={6}>
                <Typography sx={{}} gutterBottom variant='body'>
                  <Box sx={{ my: 1 }}>Name</Box>
                </Typography>

                <TextField
                  label='Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                ></TextField>

                <CopyToClipboard
                  sx={{
                    bgcolor: 'black',
                    ':hover': {
                      bgcolor: grey[800],
                      color: 'white',
                    },
                    mt: 2,
                  }}
                  text={`${url}home/${serverInfo}`}
                >
                  <Button
                    sx={{
                      ':hover': {
                        bgcolor: grey[800],
                        color: 'red',
                      },
                    }}
                    variant='contained'
                    fullWidth
                    startIcon={<Assignment fontSize='large' />}
                  >
                    Copy Video Link
                  </Button>
                </CopyToClipboard>
              </Grid>
              <Grid sx={{ padding: '20' }} item xs={12} md={6}>
                <Typography sx={{}} gutterBottom variant='body'>
                  <Box sx={{ my: 1 }}>Make A Call</Box>
                </Typography>
                <TextField
                  label='ID to Call'
                  value={idToCall}
                  onChange={(e) => setIdToCall(e.target.value)}
                  fullWidth
                ></TextField>
                {callAccepted && !callEnded ? (
                  <Button
                    sx={{
                      bgcolor: 'black',
                      ':hover': {
                        bgcolor: grey[800],
                        color: 'white',
                      },
                      mt: 2,
                    }}
                    fullWidth
                    variant='contained'
                    color='secondary'
                    onClick={leaveCall}
                    startIcon={<PhoneDisabled fontSize='large' fullWidth />}
                  >
                    Hang Up
                  </Button>
                ) : (
                  <Button
                    sx={{
                      bgcolor: 'black',
                      ':hover': {
                        bgcolor: green[800],
                        color: 'white',
                      },
                      mt: 2,
                    }}
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
      )}
    </Container>
  );
};

export default Options;
