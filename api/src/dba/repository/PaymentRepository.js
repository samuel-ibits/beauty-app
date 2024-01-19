// repositories/PaymentRepository.js
import Payment from "../models/Payment.js";

class PaymentRepository {
  async makePayment(userId, amount, currency) {
    try {
      const payment = await Payment.create({
        userId,
        amount,
        currency,
        status: "pending",
      });
      // Integrate with payment gateway API here
      // Mocking the transactionId for demonstration purposes
      payment.transactionId = `txn_${payment._id}`;
      payment.status = "success";
      await payment.save();
      return payment;
    } catch (error) {
      throw new Error("Error making payment: " + error.message);
    }
  }
}

export default PaymentRepository;
