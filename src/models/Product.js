import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    shortDescription: {
      type: String,
      default: "",
    },

    // Category
    category: {
      type: String,
      required: true,
    },

    occasion: {
      type: String,
      default: "",
    },

    flavour: {
      type: String,
      default: "",
    },

    brand: {
      type: String,
      default: "L'Chaim Cakes",
    },

    // Main Image (Cloudinary)
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

    // Gallery Images
    images: [
      {
        url: String,
        public_id: String,
      },
    ],

    // Pricing
    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    costPrice: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    // Inventory
    sku: {
      type: String,
      default: "",
    },

    stock: {
      type: Number,
      default: 0,
    },

    lowStock: {
      type: Number,
      default: 5,
    },

    inStock: {
      type: Boolean,
      default: true,
    },

    // Product Labels
    featured: {
      type: Boolean,
      default: false,
    },

    chefsSelection: {
      type: Boolean,
      default: false,
    },

    luxuryBakes: {
      type: Boolean,
      default: false,
    },

    exquisiteTreats: {
      type: Boolean,
      default: false,
    },

    bestSeller: {
      type: Boolean,
      default: false,
    },

    trending: {
      type: Boolean,
      default: false,
    },

    newArrival: {
      type: Boolean,
      default: true,
    },

    // Statistics
    rating: {
      type: Number,
      default: 5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    sold: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },

    wishlistCount: {
      type: Number,
      default: 0,
    },

    // Cake Sizes
    sizes: [
      {
        name: String,
        price: Number,
      },
    ],

    // Available Colours
    colours: [
      {
        type: String,
      },
    ],

    // Tags
    tags: [
      {
        type: String,
      },
    ],

    // Delivery
    preparationTime: {
      type: String,
      default: "24 Hours",
    },

    // Customisation
    allowCustomMessage: {
      type: Boolean,
      default: true,
    },

    allowCustomImage: {
      type: Boolean,
      default: false,
    },

    // SEO
    seoTitle: {
      type: String,
      default: "",
    },

    metaDescription: {
      type: String,
      default: "",
    },

    keywords: [
      {
        type: String,
      },
    ],

    // Visibility
    status: {
      type: String,
      enum: ["Published", "Draft", "Hidden"],
      default: "Published",
    },
  },
  {
    timestamps: true,
  }
);
console.log("Schema image:", productSchema.obj.image);
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);