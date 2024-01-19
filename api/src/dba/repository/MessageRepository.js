// repositories/MessageRepository.js

import Message from "../models/Message.js";


class MessageRepository {
  async sendMessage(senderId, receiverId, content) {
    try {
      const message = await Message.create({
        senderId,
        receiverId,
        content,
      });
      return message;
    } catch (error) {
      throw new Error("Error sending message: " + error.message);
    }
  }

  async getConversation(userId1, userId2) {
    try {
      const conversation = await Message.find({
        $or: [
          { senderId: userId1, receiverId: userId2 },
          { senderId: userId2, receiverId: userId1 },
        ],
      }).sort({ timestamp: 1 });
      return conversation;
    } catch (error) {
      throw new Error("Error getting conversation: " + error.message);
    }
  }
}

export default MessageRepository;
