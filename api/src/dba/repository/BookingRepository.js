// repositories/BookingRepository.js
import Booking from "../models/Booking.js";

class BookingRepository {
  async getAllServices() {
    try {
      // Retrieve all bookings from the database
      const bookings = await Booking.find({});
      return bookings;
    } catch (error) {
      throw new Error("Error fetching bookings from the database");
    }
  }

  async bookService(bookingData) {
    try {
      // Save a new booking to the database
      const newBooking = await Booking.create(bookingData);
      return newBooking;
    } catch (error) {
      throw new Error("Error creating a new booking in the database");
    }
  }

  async getBookingDetails(bookingId) {
    try {
      // Get booking details by ID from the database
      const bookingDetails = await Booking.findById(bookingId);
      if (!bookingDetails) {
        throw new Error("Booking not found");
      }
      return bookingDetails;
    } catch (error) {
      throw new Error("Error fetching booking details from the database");
    }
  }

  async updateBooking(bookingId, updatedData) {
    try {
      // Update booking details by ID in the database
      const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId,
        updatedData,
        { new: true }
      );
      if (!updatedBooking) {
        throw new Error("Booking not found");
      }
      return updatedBooking;
    } catch (error) {
      throw new Error("Error updating booking details in the database");
    }
  }

  async cancelBooking(bookingId) {
    try {
      // Cancel booking by ID in the database
      const canceledBooking = await Booking.findByIdAndRemove(bookingId);
      if (!canceledBooking) {
        throw new Error("Booking not found");
      }
      return canceledBooking;
    } catch (error) {
      throw new Error("Error canceling booking in the database");
    }
  }
}

export default BookingRepository;
