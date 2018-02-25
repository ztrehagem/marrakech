exports.config = (io) => io.on('connection', (socket) => {
  console.log('socket connected');

  socket.emit('greeting', { hello: 'world' });

  socket.on('echo', (data, cb) => {
    console.log('said:', data);
    cb(data);
  });

  socket.on('disconnect', () => {
    console.log('socket disconnected');
  });
});
