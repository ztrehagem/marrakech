const ChatRoom = require('../models/chat-room');
const ChatUser = require('../models/chat-user');

exports.config = (io) => io.on('connection', (socket) => {
  const user = new ChatUser();
  console.log('chat socket connected', user.id);

  socket.on('index', async (_, cb) => {
    const ids = await ChatRoom.index();
    cb(ids);
  });

  socket.on('create', async (_, cb) => {
    await user.createRoom();
    cb(user.room.id);
  });

  socket.on('join', async (rid, cb) => {
    const ok = await user.joinRoom(rid);
    if (ok) {
      socket.join(user.room.id);
      io.to(user.room.id).emit('joined', { name: user.name, date: Date.now() });
    }
    cb(ok);
  });

  socket.on('leave', async (_, cb) => {
    if (!user.room) return cb(true);
    const rid = user.room.id;
    const ok = await user.leaveRoom();
    if (ok) {
      socket.leave(rid);
      io.to(rid).emit('leaved', { name: user.name, date: Date.now() });
    }
    cb(ok);
  });

  socket.on('say', async (message, cb) => {
    user.room.touch();
    io.to(user.room.id).emit('said', {
      name: user.name,
      message,
      date: Date.now(),
    });
    cb(true);
  });

  socket.on('name', (name) => {
    user.setName(name);
  });

  socket.on('disconnect', async () => {
    console.log('chat socket disconnected', user.id);
    await user.leaveRoom();
  });
});
