import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    // Clerk User ID
    userId: {
      type: String,
      required: true,
      index: true,
    },

    // Reference to Product
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    // Product Details
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    // Product Image
    image: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },

    // Product Price
    price: {
      type: Number,
      required: true,
    },

    // Quantity
    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Cart ||
  mongoose.model("Cart", cartSchema);