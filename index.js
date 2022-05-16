const app = require('express')(); //
const server = require('http').createServer(app);
// const server = require('https');
const cors = require('cors');

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome Video Chat Server Is Running');
});

// On client side when it calls io(url) this connects
io.on('connection', (socket) => {
  //get your id on the frontend
  socket.emit('me', socket.id);

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

// server.createServer(PORT, () =>
//   console.log(`Server is running on PORT ${PORT}`)
// );
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
