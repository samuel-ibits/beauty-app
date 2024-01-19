// models/BeautyTips.js
import mongoose from "mongoose";

const beautyTipsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const BeautyTips = mongoose.model("BeautyTips", beautyTipsSchema);

export default BeautyTips;
