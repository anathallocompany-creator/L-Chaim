import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    await connectDB();

    const { email } = await req.json();

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        { status: 404 }
      );
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    admin.otp = otp;
    admin.otpExpires = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await admin.save();

    await sendEmail({
      to: admin.email,
      subject: "New Verification Code",
      html: `
        <div style="font-family:Arial;padding:25px">
          <h2>New Login Verification Code</h2>

          <p>Your new verification code is</p>

          <h1 style="letter-spacing:6px;color:#572649">
            ${otp}
          </h1>

          <p>This code expires in 10 minutes.</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "A new verification code has been sent.",
    });
  } catch (error) {
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