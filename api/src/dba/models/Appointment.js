// models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model assuming you have one
    required: true,
  },
  artistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist", // Reference to the Artist model
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  specialRequest: String,
  status: {
    type: String,
    enum: ["scheduled", "rescheduled", "canceled"],
    default: "scheduled",
  },
  reminders: [
    {
      type: Date,
    },
  ],
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
