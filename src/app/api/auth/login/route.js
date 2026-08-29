import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    console.log("Email entered:", email);
    console.log("Admin found:", admin);

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin account not found",
        },
        {
          status: 401,
        }
      );
    }

    const correctPassword = await bcrypt.compare(
      password,
      admin.password
    );

    console.log("Password Match:", correctPassword);

    if (!correctPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Password is incorrect",
        },
        {
          status: 401,
        }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    admin.otp = otp;

    admin.otpExpires = new Date(
      Date.now() + 10 * 60 * 1000
    ); // 10 minutes

    await admin.save();

    await sendEmail({
      to: admin.email,
      subject: "Admin Login Verification Code",

      html: `
        <div style="font-family:Arial;padding:30px">

            <h2>Admin Login Verification</h2>

            <p>Your verification code is:</p>

            <h1 style="
                letter-spacing:6px;
                color:#572649;
            ">
                ${otp}
            </h1>

            <p>
                This code expires in
                <strong>10 minutes</strong>.
            </p>

            <p>
                If you did not request this login,
                ignore this email.
            </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Verification code sent to your email.",
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