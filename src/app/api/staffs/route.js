import { NextResponse } from "next/server";
import Staff from "@/models/Staff";
import { connectDB } from "@/lib/mongodb";

// ===========================
// GET ALL STAFF
// ===========================

export async function GET() {
  try {
    await connectDB();

    const staff = await Staff.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      count: staff.length,
      staff,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch staff.",
      },
      { status: 500 }
    );
  }
}

// ===========================
// CREATE STAFF
// ===========================

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const exists = await Staff.findOne({
      email: body.email,
    });

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists.",
        },
        { status: 400 }
      );
    }

    const staff = await Staff.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Staff created successfully.",
        staff,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create staff.",
      },
      { status: 500 }
    );
  }
}