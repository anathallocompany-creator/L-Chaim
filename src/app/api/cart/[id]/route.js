import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Cart from "@/models/Cart";

export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          message: "Cart item ID is required",
        },
        {
          status: 400,
        }
      );
    }

    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) {
      return NextResponse.json(
        {
          message: "Cart item not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Item removed from cart",
        item: deletedItem,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("DELETE CART ITEM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to remove item from cart",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}