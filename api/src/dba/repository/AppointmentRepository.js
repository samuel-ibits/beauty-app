// repositories/AppointmentRepository.js
import Appointment from "../models/Appointment.js";

class AppointmentRepository {
  async scheduleAppointment(userId, artistId, schedule, specialRequest) {
    try {
      const appointment = await Appointment.create({
        userId,
        artistId,
        schedule,
        specialRequest,
      });
      return appointment;
    } catch (error) {
      throw new Error("Error scheduling appointment: " + error.message);
    }
  }

  async getAppointmentDetails(appointmentId) {
    try {
      const appointmentDetails = await Appointment.findById(appointmentId);
      if (!appointmentDetails) {
        throw new Error("Appointment not found");
      }
      return appointmentDetails;
    } catch (error) {
      throw new Error("Error getting appointment details: " + error.message);
    }
  }

  async rescheduleAppointment(appointmentId, newSchedule) {
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        appointmentId,
        { $set: { schedule: newSchedule, status: "rescheduled" } },
        { new: true }
      );
      if (!updatedAppointment) {
        throw new Error("Appointment not found");
      }
      return updatedAppointment;
    } catch (error) {
      throw new Error("Error rescheduling appointment: " + error.message);
    }
  }

  async cancelAppointment(appointmentId) {
    try {
      const canceledAppointment = await Appointment.findByIdAndUpdate(
        appointmentId,
        { $set: { status: "canceled" } },
        { new: true }
      );
      if (!canceledAppointment) {
        throw new Error("Appointment not found");
      }
      return canceledAppointment;
    } catch (error) {
      throw new Error("Error canceling appointment: " + error.message);
    }
  }

  async addSpecialRequest(appointmentId, specialRequest) {
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        appointmentId,
        { $set: { specialRequest } },
        { new: true }
      );
      if (!updatedAppointment) {
        throw new Error("Appointment not found");
      }
      return updatedAppointment;
    } catch (error) {
      throw new Error("Error adding special request: " + error.message);
    }
  }

  async addReminder(appointmentId, reminderDate) {
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        appointmentId,
        { $push: { reminders: reminderDate } },
        { new: true }
      );
      if (!updatedAppointment) {
        throw new Error("Appointment not found");
      }
      return updatedAppointment;
    } catch (error) {
      throw new Error("Error adding reminder: " + error.message);
    }
  }
}

export default AppointmentRepository;
