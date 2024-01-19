// repositories/PortfolioRepository.js
import Portfolio from "../models/Portfolio.js";

class PortfolioRepository {
  async createPortfolio(userId, images, videos) {
    try {
      const portfolio = await Portfolio.create({ userId, images, videos });
      return portfolio;
    } catch (error) {
      throw new Error("Error creating portfolio: " + error.message);
    }
  }

  async updatePortfolio(userId, updatedData) {
    try {
      const portfolio = await Portfolio.findOneAndUpdate(
        { userId },
        { $set: updatedData },
        { new: true }
      );
      if (!portfolio) {
        throw new Error("Portfolio not found");
      }
      return portfolio;
    } catch (error) {
      throw new Error("Error updating portfolio: " + error.message);
    }
  }

  async getPortfolio(userId) {
    try {
      const portfolio = await Portfolio.findOne({ userId });
      if (!portfolio) {
        throw new Error("Portfolio not found");
      }
      return portfolio;
    } catch (error) {
      throw new Error("Error getting portfolio: " + error.message);
    }
  }
}

export default PortfolioRepository;
