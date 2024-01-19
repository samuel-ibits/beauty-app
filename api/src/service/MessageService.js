// services/MessageService.js
import MessageRepository from "../dba/repository/MessageRepository.js";

class MessageService {
  constructor() {
    this.messageRepository = new MessageRepository();
  }

  async sendMessage(senderId, receiverId, content) {
    try {
      const message = await this.messageRepository.sendMessage(
        senderId,
        receiverId,
        content
      );
      return message;
    } catch (error) {
      throw new Error("Error sending message: " + error.message);
    }
  }

  async getConversation(userId1, userId2) {
    try {
      return await this.messageRepository.getConversation(userId1, userId2);
    } catch (error) {
      throw new Error("Error getting conversation: " + error.message);
    }
  }
}

export default MessageService;
