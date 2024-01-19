// userServices.js
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  async signUp({
    firstName,
    lastName,
    email,
    password,
    phone,
    age,
    userType,
    // Add other necessary user information
  }) {
    // Check if the email or phone is already registered
    const existingUser = await this.UserModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      throw new Error("Email or phone number is already registered.");
    }

    // Hash the password before saving it
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document in the database
    const user = await this.UserModel.create({
      firstName,
      lastName,
      email,
      password,
      phone,
      age,
      userType,
      // Set other necessary user information in the document
    });

    // Send verification email or OTP for email/phone verification

    return user;
  }

  async signIn({ email, password }) {
    // Retrieve user information based on email
    const user = await this.UserModel.findOne({ email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Validate password
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    if ((password == user.password)) {
      throw new Error("Invalid credentials");
    }

    // Generate authentication token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    return { user, token };
  }

  async signOut(userId) {
    // Implement signout logic (if needed)
    // Clear user's authentication token or perform any other necessary actions
    return { message: "Signout successful" };
  }

  async verifyPhoneNumber({ userId, otp }) {
    // Implement OTP verification logic for phone number
    // Validate OTP and mark the phone number as verified in the user document

    // For demonstration purposes, let's assume OTP validation is successful
    const user = await this.UserModel.findByIdAndUpdate(
      userId,
      { $set: { isPhoneVerified: true } },
      { new: true }
    );

    return { message: "Phone number verified successfully", user };
  }

  async verifyEmail({ userId, otp }) {
    // Implement OTP verification logic for email
    // Validate OTP and mark the email as verified in the user document

    // For demonstration purposes, let's assume OTP validation is successful
    const user = await this.UserModel.findByIdAndUpdate(
      userId,
      { $set: { isEmailVerified: true } },
      { new: true }
    );

    return { message: "Email verified successfully", user };
  }

  async updateProfile(userId, updatedProfile) {
    // Implement logic to update user profile
    // Update the user document in the database with the provided information

    const user = await this.UserModel.findByIdAndUpdate(
      userId,
      { $set: updatedProfile },
      { new: true }
    );

    return user;
  }

  // Add other relevant methods based on the requirements
}

export default UserService;
