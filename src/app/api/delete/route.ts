import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import User from "@/app/models/user";
import Router from "next/router";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json(); // Parse JSON body

    /*const body = localStorage.getItem("username");
    const parsedBody = body ? JSON.parse(body) : null;
    const username = parsedBody?.username;*/
    const email = body?.email;

    if (!email) {
      return NextResponse.json(
        { message: "email is required!" },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Find and delete the user by username
    const user = await User.findOneAndDelete({ email });

    if (!user) {
      return NextResponse.json(
        { message: `username ${email} doesn't exist` },
        { status: 404 }
      );
    }

    // Respond with a success message
    return NextResponse.json(
      { message: `user with ${email} successfully deleted` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
