const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

// Serve static files from the React app
const path = require('path');
//needed for heroku deploy
app.use(express.static(path.join(__dirname, 'client/build')));

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Welcome Video Chat Server Is Running');
});

// On client side when it calls io(url) this connects
io.on('connection', (socket) => {
  //get your id on the frontend
  socket.emit('serverInfo', socket.id);

  //broadcast message call ended
  socket.on('disconnect', () => {
    socket.broadcast.emit('callended');
  });

  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    console.log('This is the server callUser');
    console.log(name || 'No Userdat');
    io.to(userToCall).emit('callUser', { signal: signalData, from, name });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
    console.log('Server call was answered');
  });
});

//needed for heroku deploy
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
