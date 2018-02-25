const sample = require('./sample');
const chat = require('./chat');

exports.config = (io) => {
  sample.config(io.of('/sample'));
  chat.config(io.of('/chat'));
};
