import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["Super Admin", "Admin"],
      default: "Super Admin",
    },

    otp: {
      type: String,
      default: null,
    },

    // OTP Expiry Time
    otpExpires: {
      type: Date,
      default: null,
    },


    bio: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    lastLogin: {
      type: Date,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Admin ||
  mongoose.model("Admin", adminSchema);