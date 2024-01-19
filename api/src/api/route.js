// routes.js
import BookingService from "../service/BookingService.js";
import SocialMediaIntegrationService from "../service/SocialMediaIntegrationService.js";
import PaymentService from "../service/PaymentService.js";
// import ArtistService from "../service/ArtistService.js";
import AppointmentService from "../service/AppointmentService.js";
import MessageService from "../service/MessageService.js";
import FeedbackReviewService from "../service/FeedbackReviewService.js";
import BeautyTipsService from "../service/BeautyTipsService.js";
import UserService from "../service/UserServices.js";


export const routes = (app) => {
  const bookingService = new BookingService();
  const socialMediaIntegrationService = new SocialMediaIntegrationService();
  const paymentService = new PaymentService();
  // const artistService = new ArtistService();
  const appointmentService = new AppointmentService();
  const messageService = new MessageService();
  const feedbackService = new FeedbackReviewService();
  const beautyTipsService = new BeautyTipsService();
  const userService = new UserService(); // Added user service instance

  // User Routes
  app.post("/signup", async (req, res, next) => {
    try {
      const newUser = await userService.signUp(req.body);
      res.json(newUser);
    } catch (error) {
      next(error);
    }
  });

  app.post("/signin", async (req, res, next) => {
    try {
      const result = await userService.signIn(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  app.post("/signout", async (req, res, next) => {
    try {
      const userId = req.body.userId; // Assuming userId is included in the request
      const signoutResult = await userService.signOut(userId);
      res.json(signoutResult);
    } catch (error) {
      next(error);
    }
  });

  app.post("/verify/phone", async (req, res, next) => {
    try {
      const { userId, otp } = req.body;
      const verificationResult = await userService.verifyPhoneNumber({
        userId,
        otp,
      });
      res.json(verificationResult);
    } catch (error) {
      next(error);
    }
  });

  app.post("/verify/email", async (req, res, next) => {
    try {
      const { userId, otp } = req.body;
      const verificationResult = await userService.verifyEmail({
        userId,
        otp,
      });
      res.json(verificationResult);
    } catch (error) {
      next(error);
    }
  });

  app.put("/update-profile/:userId", async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const updatedProfile = req.body;
      const updatedResult = await userService.updateProfile(
        userId,
        updatedProfile
      );
      res.json(updatedResult);
    } catch (error) {
      next(error);
    }
  });

  // ... (Other user-related routes)

  // Social Media Integration
  app.post("/social-media/share/facebook", async (req, res, next) => {
    try {
      const { userId, content } = req.body;
      await socialMediaIntegrationService.shareOnFacebook(userId, content);
      return res.json({ message: "Shared on Facebook" });
    } catch (error) {
      next(error);
    }
  });

  app.post("/social-media/share/instagram", async (req, res, next) => {
    try {
      const { userId, content } = req.body;
      await socialMediaIntegrationService.shareOnInstagram(userId, content);
      return res.json({ message: "Shared on Instagram" });
    } catch (error) {
      next(error);
    }
  });

  app.post("/social-media/share/twitter", async (req, res, next) => {
    try {
      const { userId, content } = req.body;
      await socialMediaIntegrationService.shareOnTwitter(userId, content);
      return res.json({ message: "Shared on Twitter" });
    } catch (error) {
      next(error);
    }
  });

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
      const bookingDetails = await bookingService.getBookingDetails(bookingId);
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

  // Artist/Stylist Selection
  // app.get("/artists", async (req, res, next) => {
  //   try {
  //     const artists = await artistService.getAllArtists();
  //     res.json(artists);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // app.get("/artists/:id", async (req, res, next) => {
  //   try {
  //     const artistId = req.params.id;
  //     const artistDetails = await artistService.getArtistDetails(artistId);
  //     res.json(artistDetails);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // Appointment Management
  app.get("/appointments/:id", async (req, res, next) => {
    try {
      const appointmentId = req.params.id;
      const appointmentDetails = await appointmentService.getAppointmentDetails(
        appointmentId
      );
      res.json(appointmentDetails);
    } catch (error) {
      next(error);
    }
  });

  app.put("/appointments/:id", async (req, res, next) => {
    try {
      const appointmentId = req.params.id;
      const updatedData = req.body;
      const updatedAppointment =
        await appointmentService.updateAppointmentDetails(
          appointmentId,
          updatedData
        );
      res.json(updatedAppointment);
    } catch (error) {
      next(error);
    }
  });

  // Communication
  app.post("/communications", async (req, res, next) => {
    try {
      const { userId, recipientId, message } = req.body;
      const sentMessage = await messageService.sendMessage({
        userId,
        recipientId,
        message,
      });
      res.json(sentMessage);
    } catch (error) {
      next(error);
    }
  });

  app.get("/communications/:id", async (req, res, next) => {
    try {
      const communicationId = req.params.id;
      const communicationDetails = await messageService.getCommunicationDetails(
        communicationId
      );
      res.json(communicationDetails);
    } catch (error) {
      next(error);
    }
  });

  // Feedback and Reviews
  app.post("/reviews", async (req, res, next) => {
    try {
      const { userId, serviceId, rating, review } = req.body;
      const submittedReview = await feedbackService.submitReview({
        userId,
        serviceId,
        rating,
        review,
      });
      res.json(submittedReview);
    } catch (error) {
      next(error);
    }
  });

  app.get("/reviews/:id", async (req, res, next) => {
    try {
      const reviewId = req.params.id;
      const reviewDetails = await feedbackService.getReviews(reviewId);
      res.json(reviewDetails);
    } catch (error) {
      next(error);
    }
  });

  // Beauty Tips and Tutorials
  app.get("/beauty-tips", async (req, res, next) => {
    try {
      const beautyTips = await beautyTipsService.getAllBeautyTips();
      res.json(beautyTips);
    } catch (error) {
      next(error);
    }
  });

  // ... (Remaining routes)

  // Social Media Integration
  app.post("/social-media/share/facebook", async (req, res, next) => {
    try {
      const { userId, content } = req.body;
      await socialMediaIntegrationService.shareOnFacebook(userId, content);
      return res.json({ message: "Shared on Facebook" });
    } catch (error) {
      next(error);
    }
  });

  app.post("/social-media/share/instagram", async (req, res, next) => {
    try {
      const { userId, content } = req.body;
      await socialMediaIntegrationService.shareOnInstagram(userId, content);
      return res.json({ message: "Shared on Instagram" });
    } catch (error) {
      next(error);
    }
  });

  app.post("/social-media/share/twitter", async (req, res, next) => {
    try {
      const { userId, content } = req.body;
      await socialMediaIntegrationService.shareOnTwitter(userId, content);
      return res.json({ message: "Shared on Twitter" });
    } catch (error) {
      next(error);
    }
  });
};


