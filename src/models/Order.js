import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },

    name: String,

    image: {
        url: String,
        public_id: String,
    },

    quantity: Number,

    price: Number,
});

const OrderSchema = new mongoose.Schema(
    {
        // Order Information
        orderNumber: {
            type: String,
            unique: true,
            required: true,
        },

        // Clerk User
        userId: {
            type: String,
            default: null,
        },

        // Customer Details
        customer: {
            name: String,
            email: String,
            phone: String,
        },

        // Delivery Address
        shippingAddress: {
            address: String,
            city: String,
            state: String,
            country: String,
        },

        // Ordered Products
        items: [OrderItemSchema],

        // Pricing
        subtotal: {
            type: Number,
            required: true,
        },

        deliveryFee: {
            type: Number,
            default: 0,
        },

        total: {
            type: Number,
            required: true,
        },

        // Payment
        paymentMethod: {
            type: String,
            enum: ["transfer", "cash"],
            required: true,
        },

        paymentStatus: {
            type: String,
            enum: [
                "Pending",
                "Awaiting Verification",
                "Paid",
                "Failed",
            ],
            default: "Pending",
        },

        // Payment Proof
        paymentProof: {
            url: {
                type: String,
                default: "",
            },

            public_id: {
                type: String,
                default: "",
            },
        },

        transactionReference: {
            type: String,
            default: "",
        },

        paymentSubmittedAt: {
            type: Date,
            default: null,
        },

        // Order Progress
        orderStatus: {
            type: String,
            enum: [
                "Pending",
                "Processing",
                "Baking",
                "Ready",
                "Out for Delivery",
                "Delivered",
                "Cancelled",
            ],
            default: "Pending",
        },

        // Customer Note
        notes: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Order ||
    mongoose.model("Order", OrderSchema);