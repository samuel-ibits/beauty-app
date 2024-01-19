// repositories/FeedbackReviewRepository.js
import FeedbackReview from "../models/FeedbackReview.js";

class FeedbackReviewRepository {
  async submitFeedbackReview(userId, artistId, rating, review) {
    try {
      const feedbackReview = await FeedbackReview.create({
        userId,
        artistId,
        rating,
        review,
      });
      return feedbackReview;
    } catch (error) {
      throw new Error("Error submitting feedback and review: " + error.message);
    }
  }

  async getArtistFeedbackReviews(artistId) {
    try {
      const feedbackReviews = await FeedbackReview.find({ artistId });
      return feedbackReviews;
    } catch (error) {
      throw new Error(
        "Error getting artist feedback and reviews: " + error.message
      );
    }
  }
}

export default FeedbackReviewRepository;
