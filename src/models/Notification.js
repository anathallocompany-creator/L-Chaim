import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["booking", "message", "quote", "system"],
      default: "system",
    },

    read: {
      type: Boolean,
      default: false,
    },

    // Navigate when notification is clicked
    url: {
      type: String,
      default: "",
    },

    // Reference to the related message
    messageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema);