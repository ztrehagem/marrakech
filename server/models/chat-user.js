const uuid = require('uuid/v4');
const ChatRoom = require('../models/chat-room');

module.exports = class ChatUser {
  constructor() {
    this.id = uuid();
    this.room = null;
    this.name = null;
  }

  async createRoom() {
    this.room = await ChatRoom.new(this);
  }

  async joinRoom(rid) {
    if (this.room && (this.room.id == rid)) return true;
    const room = await ChatRoom.get(rid);
    if (!room) return false;
    const ok = await room.join(this);
    if (!ok) return false;
    this.room = room;
    return ok;
  }

  async leaveRoom() {
    if (!this.room) return;
    this.room.leave(this);
    this.room = null;
  }

  setName(name) {
    this.name = name;
  }
}
