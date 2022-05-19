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
              title={name || 'John Doe'}
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
