// services/FeedbackReviewService.js
import FeedbackReviewRepository from "../dba/repository/FeedbackReviewRepository.js";

class FeedbackReviewService {
  constructor() {
    this.feedbackReviewRepository = new FeedbackReviewRepository();
  }

  async submitFeedbackReview(userId, artistId, rating, review) {
    try {
      const feedbackReview =
        await this.feedbackReviewRepository.submitFeedbackReview(
          userId,
          artistId,
          rating,
          review
        );
      return feedbackReview;
    } catch (error) {
      throw new Error("Error submitting feedback and review: " + error.message);
    }
  }

  async getArtistFeedbackReviews(artistId) {
    try {
      return await this.feedbackReviewRepository.getArtistFeedbackReviews(
        artistId
      );
    } catch (error) {
      throw new Error(
        "Error getting artist feedback and reviews: " + error.message
      );
    }
  }
}

export default FeedbackReviewService;
