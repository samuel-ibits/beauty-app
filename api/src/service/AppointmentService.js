// services/AppointmentService.js
import AppointmentRepository from "../dba/repository/AppointmentRepository.js";

class AppointmentService {
  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  async scheduleAppointment(userId, artistId, schedule, specialRequest) {
    try {
      return await this.appointmentRepository.scheduleAppointment(
        userId,
        artistId,
        schedule,
        specialRequest
      );
    } catch (error) {
      throw new Error("Error scheduling appointment: " + error.message);
    }
  }

  async getAppointmentDetails(appointmentId) {
    try {
      return await this.appointmentRepository.getAppointmentDetails(
        appointmentId
      );
    } catch (error) {
      throw new Error("Error getting appointment details: " + error.message);
    }
  }

  async rescheduleAppointment(appointmentId, newSchedule) {
    try {
      return await this.appointmentRepository.rescheduleAppointment(
        appointmentId,
        newSchedule
      );
    } catch (error) {
      throw new Error("Error rescheduling appointment: " + error.message);
    }
  }

  async cancelAppointment(appointmentId) {
    try {
      return await this.appointmentRepository.cancelAppointment(appointmentId);
    } catch (error) {
      throw new Error("Error canceling appointment: " + error.message);
    }
  }

  async addSpecialRequest(appointmentId, specialRequest) {
    try {
      return await this.appointmentRepository.addSpecialRequest(
        appointmentId,
        specialRequest
      );
    } catch (error) {
      throw new Error("Error adding special request: " + error.message);
    }
  }

  async addReminder(appointmentId, reminderDate) {
    try {
      return await this.appointmentRepository.addReminder(
        appointmentId,
        reminderDate
      );
    } catch (error) {
      throw new Error("Error adding reminder: " + error.message);
    }
  }
}

export default AppointmentService;
