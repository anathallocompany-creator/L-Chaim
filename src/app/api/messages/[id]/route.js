import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Message from "@/models/Message";

// GET SINGLE MESSAGE
export async function GET(req, { params }) {
  try {
    await connectDB();

    const message = await Message.findById(params.id);

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

// UPDATE MESSAGE
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const body = await req.json();

    const message = await Message.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE MESSAGE
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    await Message.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}