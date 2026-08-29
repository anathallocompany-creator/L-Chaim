import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);

        const userId = searchParams.get("userId");

        console.log("Received userId:", userId);

        if (!userId) {
            return NextResponse.json(
                { message: "User ID is required" },
                { status: 400 }
            );
        }

        const orders = await Order.find({ userId }).sort({
            createdAt: -1,
        });

        console.log("Matched Orders:", orders);

        return NextResponse.json(orders);

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                message: "Unable to fetch orders",
            },
            {
                status: 500,
            }
        );
    }
}