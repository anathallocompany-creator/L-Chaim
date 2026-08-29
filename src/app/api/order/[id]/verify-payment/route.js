import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(req, { params }) {
    try {
        await connectDB();

        const { id } = await params;

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
        order.paymentStatus = "Paid";
        order.status = "Processing";
        order.paymentVerifiedAt = new Date();

        await order.save();
        return NextResponse.json({
            success: true,
            message: "Payment verified successfully",
            order,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                message: "Unable to verify payment",
            },
            {
                status: 500,
            }
        );
    }
}