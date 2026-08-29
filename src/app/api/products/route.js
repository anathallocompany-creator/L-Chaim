import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import generateSlug from "@/utils/generateSlug";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    // Convert keywords string into array
    if (typeof body.keywords === "string") {
      body.keywords = body.keywords
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    const slug =
      body.slug?.trim() || generateSlug(body.name);

    const product = await Product.create({
      ...body,
      slug,
    });



    return NextResponse.json(product, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}