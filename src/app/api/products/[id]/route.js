import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import generateSlug from "@/utils/generateSlug";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

  const product = await Product.findById(id);

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}


export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    body.slug =
      body.slug?.trim() || generateSlug(body.name);

    const product = await Product.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}


export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    await Product.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}