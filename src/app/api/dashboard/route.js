import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Product from "@/models/Product";
import Order from "@/models/Order";
import Customer from "@/models/Customer";
import Review from "@/models/Review";
import Staff from "@/models/Staff";
import Wishlist from "@/models/Wishlist";
import Categories from "@/models/Categories";


export async function GET() {
  try {
    await connectDB();

    const [
      products,
      orders,
      customers,
      reviews,
      staffs,
      wishlist,
      categories,
    ] = await Promise.all([
      Product.countDocuments(),
      Order.countDocuments(),
      Customer.countDocuments(),
      Review.countDocuments(),
      Staff.countDocuments(),
      Wishlist.countDocuments(),
      Categories.countDocuments(),
    ]);

    // Total revenue
    const revenueResult = await Order.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const revenue =
      revenueResult.length > 0
        ? revenueResult[0].total
        : 0;

    // Monthly Orders & Revenue
    const monthly = await Order.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
        },
      },
      {
        $group: {
          _id: {
            month: {
              $month: "$createdAt",
            },
          },
          orders: {
            $sum: 1,
          },
          revenue: {
            $sum: "$totalAmount",
          },
        },
      },
      {
        $sort: {
          "_id.month": 1,
        },
      },
    ]);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyActivity = months.map((month, index) => {
      const item = monthly.find(
        (m) => m._id.month === index + 1
      );

      return {
        month,
        orders: item?.orders || 0,
        revenue: item?.revenue || 0,
      };
    });

    return NextResponse.json({
      products,
      orders,
      customers,
      revenue,
      staffs,
      reviews,
      Categories,
      wishlist,
      monthlyActivity,
    });
  } catch (error) {
    console.log(error);

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