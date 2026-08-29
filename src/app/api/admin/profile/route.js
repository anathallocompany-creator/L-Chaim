import { NextResponse } from "next/server";

import Admin from "@/models/Admin";
import cloudinary from "@/lib/cloudinary";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";

// ============================================
// GET PROFILE
// ============================================

export async function GET() {
  try {
    await connectDB();

    let admin = await Admin.findOne();

    if (!admin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      admin = await Admin.create({
        name: "Demo Admin",
        email: "admin@gadiel.com",
        password: hashedPassword,
        phone: "",
        role: "Super Admin",
        bio: "",
        photo: {
          url: "",
          public_id: "",
        },
      });
    }

    return NextResponse.json({
      success: true,
      admin,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}

// ============================================
// UPDATE PROFILE
// ============================================

export async function PUT(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const role = formData.get("role");
    const bio = formData.get("bio");
    const imageFile = formData.get("image");

    const admin = await Admin.findOne();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found.",
        },
        { status: 404 }
      );
    }

    let photo = admin.photo;

    // Upload new image if selected
    if (imageFile && typeof imageFile !== "string" && imageFile.size > 0) {

      // Delete old image
      if (admin.photo?.public_id) {
        await cloudinary.uploader.destroy(admin.photo.public_id);
      }

      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "admin-profile",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      photo = {
        url: upload.secure_url,
        public_id: upload.public_id,
      };
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      admin._id,
      {
        name,
        email,
        phone,
        role,
        bio,
        photo,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully.",
      admin: updatedAdmin,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}