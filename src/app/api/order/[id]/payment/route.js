import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(req, { params }) {
    try {
        await connectDB();

        // ✅ Next.js 15
        const { id } = await params;

        console.log("Payment Route Order ID:", id);

        const body = await req.json();

        const {
            transactionReference,
            paymentProof,
        } = body;

        const order = await Order.findById(id);

        if (!order) {
            return NextResponse.json(
                {
                    message: "Order not found",
                },
                {
                    status: 404,
                }
            );
        }

        order.transactionReference = transactionReference;

        order.paymentProof = paymentProof;

        order.paymentSubmittedAt = new Date();

        order.paymentStatus = "Awaiting Verification";

        await order.save();

        return NextResponse.json({
            success: true,
            order,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                message: "Unable to submit payment",
            },
            {
                status: 500,
            }
        );
    }
}