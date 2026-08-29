import { NextResponse } from "next/server";

import Cart from "@/models/Cart";
import { connectDB } from "@/lib/mongodb";

//
// GET USER CART
//

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const userId = searchParams.get("userId");

    const cart = await Cart.find({ userId });

    return NextResponse.json(cart);

  } catch (error) {

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );

  }
}

//
// ADD TO CART
//

export async function POST(req) {

  try {

    await connectDB();

    const data = await req.json();

    const existing = await Cart.findOne({
      userId: data.userId,
      productId: data.productId,
    });

    if (existing) {

      existing.quantity += 1;

      await existing.save();

      return NextResponse.json(existing);

    }

    console.log("Incoming cart data:", JSON.stringify(data, null, 2));

    const cart = await Cart.create(data);


    return NextResponse.json(cart);

  } catch (error) {

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );

  }

}

//
// REMOVE ITEM
//

export async function DELETE(req) {

  try {

    await connectDB();

    const { id } = await req.json();

    await Cart.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );

  }

}