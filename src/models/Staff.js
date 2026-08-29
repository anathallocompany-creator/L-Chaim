import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema(
  {
    photo: {
      url: {
        type: String,
        default: "",
      },
      public_id: {
        type: String,
        default: "",
      },
    },

    fullName: {
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

    phone: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
      enum: [
        "Administrator",
        "Manager",
        "Cake Decorator",
        "Baker",
        "Pastry Chef",
        "Sales Representative",
        "Cashier",
        "Delivery Rider",
        "Customer Support",
      ],
    },

    department: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    dob: Date,

    joinedAt: {
      type: Date,
      default: Date.now,
    },

    salary: {
      type: Number,
      default: 0,
    },

    address: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "Active",
        "On Leave",
        "Suspended",
        "Resigned",
      ],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Staff ||
  mongoose.model("Staff", StaffSchema);