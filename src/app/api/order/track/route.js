import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req) {
    try {
        await connectDB();

        const { orderNumber } = await req.json();

        if (!orderNumber) {
            return NextResponse.json(
                {
                    message: "Order number is required",
                },
                {
                    status: 400,
                }
            );
        }

        const order = await Order.findOne({
            orderNumber: orderNumber.trim(),
        });

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

        return NextResponse.json(order);
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                message: "Server Error",
            },
            {
                status: 500,
            }
        );
    }
}