// services/PortfolioService.js
import PortfolioRepository from "../dba/repositories/PortfolioRepository.js";

class PortfolioService {
  constructor() {
    this.portfolioRepository = new PortfolioRepository();
  }

  async createPortfolio(userId, images, videos) {
    try {
      return await this.portfolioRepository.createPortfolio(
        userId,
        images,
        videos
      );
    } catch (error) {
      throw new Error("Error creating portfolio: " + error.message);
    }
  }

  async updatePortfolio(userId, updatedData) {
    try {
      return await this.portfolioRepository.updatePortfolio(
        userId,
        updatedData
      );
    } catch (error) {
      throw new Error("Error updating portfolio: " + error.message);
    }
  }

  async getPortfolio(userId) {
    try {
      return await this.portfolioRepository.getPortfolio(userId);
    } catch (error) {
      throw new Error("Error getting portfolio: " + error.message);
    }
  }
}

export default PortfolioService;
