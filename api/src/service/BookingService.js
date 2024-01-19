// services/BookingService.js

import BookingRepository from "../dba/repository/BookingRepository.js";

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async getAllServices() {
    try {
      return await this.bookingRepository.getAllServices();
    } catch (error) {
      throw new Error("Error getting all services: " + error.message);
    }
  }

  async bookService(bookingData) {
    try {
      return await this.bookingRepository.bookService(bookingData);
    } catch (error) {
      throw new Error("Error booking service: " + error.message);
    }
  }

  async getBookingDetails(bookingId) {
    try {
      return await this.bookingRepository.getBookingDetails(bookingId);
    } catch (error) {
      throw new Error("Error getting booking details: " + error.message);
    }
  }

  async updateBooking(bookingId, updatedData) {
    try {
      return await this.bookingRepository.updateBooking(bookingId, updatedData);
    } catch (error) {
      throw new Error("Error updating booking: " + error.message);
    }
  }

  async cancelBooking(bookingId) {
    try {
      return await this.bookingRepository.cancelBooking(bookingId);
    } catch (error) {
      throw new Error("Error canceling booking: " + error.message);
    }
  }
}

export default BookingService;
