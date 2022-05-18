import { Grid, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { SocketContext } from '../Context';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const VideoPlayer = () => {
  //Contains all the SocketContext Stuff
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Grid
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
      container
      xs={12}
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
          md={6}
        >
          {/* Their Video */}{' '}
          <Card sx={{ minWidth: 500 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[510] }} aria-label='recipe'>
                  42
                </Avatar>
              }
              title={name || 'John Doe'}
            />

            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <video playsInline muted ref={userVideo} autoPlay width={480} />
            </CardContent>
          </Card>
          {/* {callAccepted && !callEnded && (
          <Paper sx={{ padding: '10px', margin: '10px' }}>
            <Typography variant='h6'> {call.name || 'Anon'}</Typography>
            <video playsInline muted ref={userVideo} autoPlay />
          </Paper>
        )} */}
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
          md={6}
        >
          <Card sx={{ minWidth: 500 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[510] }} aria-label='recipe'>
                  41
                </Avatar>
              }
              title={name || 'John Doe'}
            />

            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <video playsInline muted ref={myVideo} autoPlay width={480} />
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
