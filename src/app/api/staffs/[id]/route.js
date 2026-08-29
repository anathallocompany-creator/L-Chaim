import { NextResponse } from "next/server";
import Staff from "@/models/Staff";
import { connectDB } from "@/lib/mongodb";

// ===========================
// GET SINGLE STAFF
// ===========================

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const staff = await Staff.findById(id);

    if (!staff) {
      return NextResponse.json(
        {
          success: false,
          message: "Staff not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      staff,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch staff.",
      },
      { status: 500 }
    );
  }
}

// ===========================
// UPDATE STAFF
// ===========================

export async function PUT(request, { params }) {
  try {
    await connectDB();

    const body = await request.json();

    const { id } = await params;

    const staff = await Staff.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!staff) {
      return NextResponse.json(
        {
          success: false,
          message: "Staff not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Staff updated successfully.",
      staff,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update staff.",
      },
      { status: 500 }
    );
  }
}

// ===========================
// DELETE STAFF
// ===========================
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const staff = await Staff.findById(id);

    if (!staff) {
      return NextResponse.json(
        {
          success: false,
          message: "Staff not found.",
        },
        { status: 404 }
      );
    }

    await Staff.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Staff deleted successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete staff.",
      },
      { status: 500 }
    );
  }
}