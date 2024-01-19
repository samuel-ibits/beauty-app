// models/Portfolio.js
import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  timestamp: { type: Date, default: Date.now },
});

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model assuming you have one
    required: true,
  },
  images: [mediaSchema],
  videos: [mediaSchema],
  ratingsAndReviews: [
    {
      rating: { type: Number, min: 1, max: 5 },
      review: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
