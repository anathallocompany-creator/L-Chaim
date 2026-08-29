import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Message from "@/models/Message";
import Notification from "@/models/Notification";
import transporter from "@/lib/mailer";

// ===============================
// GET ALL MESSAGES
// ===============================
export async function GET() {
  try {
    await connectDB();

    const messages = await Message.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch messages",
      },
      {
        status: 500,
      }
    );
  }
}

// ===============================
// CREATE MESSAGE + NOTIFICATION
// ===============================
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    // =============================
    // Save Message
    // =============================
    const message = await Message.create({
      type: body.type,
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject || "",
      message: body.message || "",

      booking:
        body.type === "booking"
          ? {
              eventType: body.booking?.eventType,
              category: body.booking?.category,
              location: body.booking?.location,
              guests: body.booking?.guests,
              date: body.booking?.date,
            }
          : undefined,

      status: "New",
      read: false,
      replied: false,
    });

    // =============================
    // Create Notification
    // =============================
    await Notification.create({
      title:
        body.type === "booking"
          ? "📅 New Booking Request"
          : "📩 New Contact Message",

      message:
        body.type === "booking"
          ? `${body.name} • ${body.booking?.eventType || "Booking"}`
          : `${body.name} • ${body.subject || "No Subject"}`,

      type: body.type === "booking" ? "booking" : "message",

      read: false,

      url: "/admin/message",

      messageId: message._id,
    });

    // =============================
    // EMAIL TO CUSTOMER
    // =============================
    await transporter.sendMail({
      from: `"L'Chaim Sweet" <${process.env.EMAIL_USER}>`,

      to: body.email,

      subject: "We've received your message",

      html: `
        <div style="font-family:Arial;padding:30px;line-height:1.8">

            <h2 style="color:#572649">
                Hello ${body.name},
            </h2>

            <p>
                Thank you for contacting
                <strong>L'Chaim Sweet.</strong>
            </p>

            <p>
                We have successfully received your message.
            </p>

            <p>
                Our team will get back to you as soon as possible.
            </p>

            <hr>

            <h3>Your Message</h3>

            <p><strong>Subject:</strong> ${body.subject || "-"}</p>

            <p>${body.message}</p>

            <hr>

            <p>
                Thank you for choosing us ❤️
            </p>

        </div>
      `,
    });

    // =============================
    // EMAIL TO ADMIN
    // =============================
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,

      to: process.env.ADMIN_EMAIL,

      subject:
        body.type === "booking"
          ? "New Booking Request"
          : "New Contact Message",

      html: `
        <div style="font-family:Arial;padding:30px">

            <h2>New Message from Client</h2>

            <p><strong>Name:</strong> ${body.name}</p>

            <p><strong>Email:</strong> ${body.email}</p>

            <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>

            <p><strong>Subject:</strong> ${body.subject}</p>

            <p><strong>Message:</strong></p>

            <p>${body.message}</p>

        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message,
      },
      {
        status: 201,
      }
    );
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