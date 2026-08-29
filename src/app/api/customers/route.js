import { NextResponse } from "next/server";
import Customer from "@/models/Customer";
import { connectDB } from "@/lib/mongodb";

// GET ALL CUSTOMERS
export async function GET() {
  try {
    await connectDB();

    const customers = await Customer.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      customers,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch customers",
      },
      { status: 500 }
    );
  }
}

// CREATE CUSTOMER
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const count = await Customer.countDocuments();

    const customer = await Customer.create({
      ...body,
      customerId: `CUS-${String(count + 1).padStart(4, "0")}`,
    });

    return NextResponse.json(
      {
        success: true,
        customer,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}