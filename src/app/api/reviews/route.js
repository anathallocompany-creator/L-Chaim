import { NextResponse } from "next/server";
import Review from "@/models/Review";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .populate("customer", "fullName email")
      .populate("product", "name image")
      .populate("order", "orderNumber");

    return NextResponse.json({
      success: true,
      reviews,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch reviews.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const review = await Review.create(body);

    return NextResponse.json({
      success: true,
      message: "Review submitted successfully.",
      review,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit review.",
      },
      { status: 500 }
    );
  }
}