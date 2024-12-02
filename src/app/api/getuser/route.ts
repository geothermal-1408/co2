import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  // Extract cookies from the request
  const cookies = req.cookies;
  const co2Token = cookies.get("co2-token");
  console.log(co2Token);

  if (!co2Token) {
    return NextResponse.json(
      { message: "Unauthorized - co2-token not found" },
      { status: 401 }
    );
  }

  try {
    // Decode the token without verifying it (use verify for security)
    const decoded = jwt.decode(co2Token.value);

    if (
      typeof decoded === "object" &&
      decoded !== null &&
      "email" in decoded &&
      "name" in decoded
    ) {
      const email = decoded.email;
      const name = decoded.name;
      return NextResponse.json({ email, name }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Invalid token - email not found" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
