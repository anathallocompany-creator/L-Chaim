import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["contact", "booking"],
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },

    subject: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      default: "",
    },

    booking: {
      eventType: String,
      category: String,
      location: String,
      guests: Number,
      date: Date,
    },

    status: {
      type: String,
      enum: ["New", "Read", "Replied", "Archived"],
      default: "New",
    },

    read: {
      type: Boolean,
      default: false,
    },

    replied: {
      type: Boolean,
      default: false,
    },

    archived: {
      type: Boolean,
      default: false,
    },

    reply: {
      message: String,
      sentAt: Date,
      sentBy: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);