import { NextResponse } from "next/server";
import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";
import { resend } from "@/lib/resend";
import OrderConfirmation from "@/emails/OrderConfirmation";

export async function GET() {
    await connectDB();

    const orders = await Order.find().sort({
        createdAt: -1,
    });

    return NextResponse.json(orders);
}

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        console.log("BODY RECEIVED:", body);

        // Generate order number
        const orderNumber =
            "LC-" + Date.now().toString().slice(-8);

        // Create Order
        const order = await Order.create({
            ...body,

            orderNumber,

            // Payment Status
            paymentStatus:
                body.paymentMethod === "transfer"
                    ? "Awaiting Verification"
                    : "Pending",

            // Order Status
            orderStatus: "Pending",
        });

        // Send Confirmation Email
        // Send Confirmation Email
        const email = await resend.emails.send({
            from: "L'Chaim Cakes <onboarding@resend.dev>",
            to: order.customer.email,
            subject: `Order Confirmation - ${order.orderNumber}`,
            react: OrderConfirmation({
                customerName: order.customer.name,
                orderNumber: order.orderNumber,
                items: order.items,
                total: order.total,
                orderLink: `http://localhost:3000/my-orders/${order._id}`,
            }),
        });

        console.log("EMAIL RESPONSE:", email);

        return NextResponse.json(order, {
            status: 201,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                message: "Unable to create order",
            },
            {
                status: 500,
            }
        );
    }
}