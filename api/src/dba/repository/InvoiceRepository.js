// repositories/InvoiceRepository.js
import Invoice from "../models/Invoice.js";

class InvoiceRepository {
  async generateInvoice(userId, paymentId, items, totalAmount, currency) {
    try {
      const invoice = await Invoice.create({
        userId,
        paymentId,
        items,
        totalAmount,
        currency,
        status: "pending",
      });
      return invoice;
    } catch (error) {
      throw new Error("Error generating invoice: " + error.message);
    }
  }

  async markInvoiceAsPaid(invoiceId) {
    try {
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        invoiceId,
        { $set: { status: "paid" } },
        { new: true }
      );
      if (!updatedInvoice) {
        throw new Error("Invoice not found");
      }
      return updatedInvoice;
    } catch (error) {
      throw new Error("Error marking invoice as paid: " + error.message);
    }
  }
}

export default InvoiceRepository;
