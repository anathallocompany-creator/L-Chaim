import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    productId: {
      type: String,
      required: true,
    },

    name: String,

    slug: String,

    image: String,

    price: Number,

    oldPrice: Number,

    category: String,
  },
  {
    timestamps: true,
  }
);

WishlistSchema.index(
  {
    userId: 1,
    productId: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.models.Wishlist ||
mongoose.model("Wishlist", WishlistSchema);