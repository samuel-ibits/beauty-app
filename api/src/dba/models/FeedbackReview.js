// models/FeedbackReview.js
import mongoose from "mongoose";

const feedbackReviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model assuming you have one
    required: true,
  },
  artistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist", // Reference to the Artist model assuming you have one
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const FeedbackReview = mongoose.model("FeedbackReview", feedbackReviewSchema);

export default FeedbackReview;
