import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/app/utils/dbConnect";
import User from "@/app/models/user";

const secret = process.env.JWT_SECRET as string;

// Define the structure of the decoded token
interface DecodedToken {
  user: {
    id: string;
  };
}

// GET Method handler
export async function GET(req: Request) {
  try {
    // Get Authorization header using the next/headers utility
    const authHeader = req.headers.get("Authorization");
    //console.log(authHeader);  // Debug: Check the authorization header

    if (!authHeader) {
      return NextResponse.json(
        { message: "No token provided" },
        { status: 401 }
      );
    }

    // const token = authHeader.split(" ")[1];
    // console.log(token);

    // if (!token) {
    //   return NextResponse.json(
    //     { message: "No token provided" },
    //     { status: 401 }
    //   );
    // }

    // Verify the token and extract user ID
    const decoded = jwt.verify(authHeader, secret) as DecodedToken;

    console.log(decoded.user);
    

    // Connect to the database
    await dbConnect();

    // Find user by ID from the decoded token
    const user = await User.findById(decoded.user.id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Send user info as the response
    return NextResponse.json({ name: user.username, email: user.email });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
