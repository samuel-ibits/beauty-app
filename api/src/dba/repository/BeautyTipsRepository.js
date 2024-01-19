// repositories/BeautyTipsRepository.js
import BeautyTips from "../models/BeautyTips.js";

class BeautyTipsRepository {
  async getAllBeautyTips() {
    try {
      const beautyTips = await BeautyTips.find().sort({ timestamp: -1 });
      return beautyTips;
    } catch (error) {
      throw new Error("Error getting beauty tips: " + error.message);
    }
  }
}

export default BeautyTipsRepository;
