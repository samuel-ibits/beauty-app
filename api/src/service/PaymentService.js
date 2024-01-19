// services/PaymentService.js
import PaymentRepository from "../dba/repository/PaymentRepository.js";

class PaymentService {
  constructor() {
    this.paymentRepository = new PaymentRepository();
  }

  async makePayment(userId, amount, currency) {
    try {
      const payment = await this.paymentRepository.makePayment(
        userId,
        amount,
        currency
      );
      return payment;
    } catch (error) {
      throw new Error("Error making payment: " + error.message);
    }
  }
}

export default PaymentService;
