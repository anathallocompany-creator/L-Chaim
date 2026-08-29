import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        await connectDB();

        const { email, otp } = await req.json();

        const admin = await Admin.findOne({
            email: email.toLowerCase(),
        });

        if (!admin) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Admin not found",
                },
                {
                    status: 404,
                }
            );
        }

        if (admin.otp !== otp) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid verification code",
                },
                {
                    status: 401,
                }
            );
        }

        if (
            !admin.otpExpires ||
            admin.otpExpires < new Date()
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Verification code has expired",
                },
                {
                    status: 401,
                }
            );
        }

        // Clear OTP after successful verification
        admin.otp = null;
        admin.otpExpires = null;

        await admin.save();

        const token = jwt.sign(
            {
                id: admin._id,
                email: admin.email,
                role: admin.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        return NextResponse.json({
            success: true,
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                image: admin.image,
            },
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}