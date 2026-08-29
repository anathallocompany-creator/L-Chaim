import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import Wishlist from "@/models/Wishlist";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {

    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    const product = await req.json();

    const exists = await Wishlist.findOne({
        userId,
        productId: product.id,
    });

    if (exists) {

        await Wishlist.deleteOne({
            _id: exists._id,
        });

        return NextResponse.json({
            liked: false,
        });
    }

    await Wishlist.create({
        userId,
        productId: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        oldPrice: product.oldPrice,
        category: product.category,
    });

    return NextResponse.json({
        liked: true,
    });
}



export async function GET() {

    await connectDB();

    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json([]);
    }

    const items = await Wishlist.find({
        userId,
    });

    return NextResponse.json(items);
}
