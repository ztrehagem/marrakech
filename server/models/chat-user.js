const uuid = require('uuid/v4');
const ChatRoom = require('../models/chat-room');

module.exports = class ChatUser {
  constructor() {
    this.id = uuid();
    this.room = null;
  }

  async createRoom() {
    this.room = await ChatRoom.new(this);
  }

  async joinRoom(rid) {
    if (this.room && (this.room.id == rid)) return true;
    this.room = await ChatRoom.get(rid);
    if (!this.room) return false;
    return this.room.join(this);
  }

  async leaveRoom() {
    if (!this.room) return;
    this.room.leave(this);
    this.room = null;
  }
}
