// services/BeautyTipsService.js
import BeautyTipsRepository from "../dba/repository/BeautyTipsRepository.js";

class BeautyTipsService {
  constructor() {
    this.beautyTipsRepository = new BeautyTipsRepository();
  }

  async getAllBeautyTips() {
    try {
      return await this.beautyTipsRepository.getAllBeautyTips();
    } catch (error) {
      throw new Error("Error getting beauty tips: " + error.message);
    }
  }
}

export default BeautyTipsService;
