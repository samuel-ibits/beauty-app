// routes.js
// import { PublishMessage, SubscribeMessage } from "../utils/index.js";
// import { configs } from "../config/index.js";

  // routes.js
  import BookingService from "../service/BookingService.js";

  export const routes = (app) => {
    const bookingService = new BookingService();

    // Service Booking
    app.get("/services", async (req, res, next) => {
      try {
        const services = await bookingService.getAllServices();
        res.json(services);
      } catch (error) {
        next(error);
      }
    });

    app.post("/bookings", async (req, res, next) => {
      try {
        const { userId, serviceId, schedule, customization } = req.body;
        const booking = await bookingService.bookService({
          userId,
          serviceId,
          schedule,
          customization,
        });
        res.json(booking);
      } catch (error) {
        next(error);
      }
    });

    app.get("/bookings/:id", async (req, res, next) => {
      try {
        const bookingId = req.params.id;
        const bookingDetails = await bookingService.getBookingDetails(
          bookingId
        );
        res.json(bookingDetails);
      } catch (error) {
        next(error);
      }
    });

    app.put("/bookings/:id", async (req, res, next) => {
      try {
        const bookingId = req.params.id;
        const updatedData = req.body;
        const updatedBooking = await bookingService.updateBooking(
          bookingId,
          updatedData
        );
        res.json(updatedBooking);
      } catch (error) {
        next(error);
      }
    });

    app.delete("/bookings/:id", async (req, res, next) => {
      try {
        const bookingId = req.params.id;
        const canceledBooking = await bookingService.cancelBooking(bookingId);
        res.json(canceledBooking);
      } catch (error) {
        next(error);
      }
    });

   
 
  // Service Customization
  app.get(
    "/services/:id/customization" /* ServiceController.getCustomizationOptions */
  );
  app.put(
    "/bookings/:id/customization" /* BookingController.updateCustomizationOptions */
  );

  // Artist/Stylist Selection
  app.get("/artists" /* ArtistController.getAllArtists */);
  app.get("/artists/:id" /* ArtistController.getArtistDetails */);

  // Appointment Management
  app.get(
    "/bookings/:id/appointments" /* BookingController.getAppointmentDetails */
  );
  app.put(
    "/bookings/:id/appointments" /* BookingController.updateAppointmentDetails */
  );

  // Payment and Invoicing
  app.post("/payments" /* PaymentController.makePayment */);
  app.get("/invoices/:id" /* InvoiceController.getInvoiceDetails */);

  // Communication
  app.post("/communications" /* CommunicationController.sendMessage */);
  app.get(
    "/communications/:id" /* CommunicationController.getCommunicationDetails */
  );

  // Feedback and Reviews
  app.post("/reviews" /* ReviewController.submitReview */);
  app.get("/reviews/:id" /* ReviewController.getReviews */);

  // Beauty Tips and Tutorials
  app.get("/beauty-tips" /* BeautyTipsController.getAllBeautyTips */);

  // Push Notifications (assumed automatic, no specific endpoint)

  // Social Media Integration
  app.post(
    "/social-media/share" /* SocialMediaController.shareOnSocialMedia */
  );
};