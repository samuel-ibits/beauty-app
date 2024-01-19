// services/InvoiceService.js
import InvoiceRepository from "../dba/repository/InvoiceRepository.js";

class InvoiceService {
  constructor() {
    this.invoiceRepository = new InvoiceRepository();
  }

  async generateInvoice(userId, paymentId, items, totalAmount, currency) {
    try {
      const invoice = await this.invoiceRepository.generateInvoice(
        userId,
        paymentId,
        items,
        totalAmount,
        currency
      );
      return invoice;
    } catch (error) {
      throw new Error("Error generating invoice: " + error.message);
    }
  }

  async markInvoiceAsPaid(invoiceId) {
    try {
      return await this.invoiceRepository.markInvoiceAsPaid(invoiceId);
    } catch (error) {
      throw new Error("Error marking invoice as paid: " + error.message);
    }
  }
}

export default InvoiceService;
