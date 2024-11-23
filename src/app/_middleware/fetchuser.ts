import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Define a custom interface for the JWT payload

interface CustomJwtPayload extends JwtPayload {
  user: {
    id: string;
    username: string;
  };
}

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

export async function middleware(req: NextRequest) {
  // Get the token from the request cookies
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return new NextResponse(
      JSON.stringify({ message: "No token provided" }),
      { status: 401 }
    );
  }

  // Verify and decode the token
  let decoded: CustomJwtPayload | string;
  try {
    decoded = jwt.verify(token, secret!) as CustomJwtPayload;
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid or expired token" }),
      { status: 401 }
    );
  }

  // Ensure the decoded token contains the 'user' object and the 'username'
  if (typeof decoded !== "object" || !decoded.user || !decoded.user.username) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid token structure" }),
      { status: 401 }
    );
  }

  // Attach the username to the request for use in the next handler (DELETE API)
  req.username = decoded.user.username;

  // Proceed to the next handler
  return NextResponse.next();

}

export const config = {
  matcher: ['/delete'],
}
