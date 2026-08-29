import { NextResponse } from "next/server";
import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";
import { resend } from "@/lib/resend";
import OrderReadyEmail from "@/emails/OrderReadyEmail";

// GET SINGLE ORDER
export async function GET(req, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        const order = await Order.findById(id);

        if (!order) {
            return NextResponse.json(
                {
                    message: "Order not found",
                    id,
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(order);

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                message: "Server Error",
            },
            {
                status: 500,
            }
        );
    }
}

// UPDATE ORDER
export async function PUT(req, { params }) {
    try {
        await connectDB();

        const { id } = await params;
        const body = await req.json();

        // Get current order
        const existingOrder = await Order.findById(id);

        if (!existingOrder) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Order not found",
                },
                {
                    status: 404,
                }
            );
        }

        // Save previous status
        const previousStatus = existingOrder.orderStatus;

        // Update order
        const order = await Order.findByIdAndUpdate(
            id,
            body,
            {
                new: true,
                runValidators: true,
            }
        );

        // Send email only if status changed
        if (
            body.orderStatus &&
            body.orderStatus !== previousStatus
        ) {
            let subject = "";
            let message = "";

            switch (body.orderStatus) {
                case "Ready":
                    subject = "🎂 Your Order is Ready!";
                    message =
                        "Your delicious order has been freshly prepared and is now ready for pickup or dispatch.";
                    break;

                case "Out for Delivery":
                    subject = "🚚 Your Order is on the Way!";
                    message =
                        "Good news! Your order has left our bakery and is on its way to your delivery address.";
                    break;

                case "Delivered":
                    subject = "✅ Your Order Has Been Delivered";
                    message =
                        "Your order has been delivered successfully. We hope you enjoy every bite!";
                    break;

                case "Cancelled":
                    subject = "Order Cancelled";
                    message =
                        "Unfortunately, your order has been cancelled. If you have any questions, please contact our support team.";
                    break;

                default:
                    message = "";
            }

            if (message) {
                await resend.emails.send({
                    from: "L'Chaim Cakes <onboarding@resend.dev>",
                    to: order.customer.email,
                    subject,
                    react: OrderReadyEmail({
                        customerName: order.customer.name,
                        orderNumber: order.orderNumber,
                        status: body.orderStatus,
                        message,
                        orderLink: `http://localhost:3000/my-orders/${order._id}`,
                    }),
                });
            }
        }

        return NextResponse.json({
            success: true,
            message: "Order updated successfully",
            order,
        });

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to update order",
            },
            {
                status: 500,
            }
        );
    }
}

// DELETE ORDER
export async function DELETE(req, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        const order = await Order.findByIdAndDelete(id);

        if (!order) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Order not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Order deleted successfully",
        });

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to delete order",
            },
            {
                status: 500,
            }
        );
    }
}