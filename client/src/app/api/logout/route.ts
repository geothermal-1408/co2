import { NextResponse } from "next/server";

export async function POST() {
  // Perform logout logic here, e.g., clearing cookies or session
  const response = NextResponse.json({ message: "Logout successful" });
  response.headers.set("Set-Cookie", "token=; Max-Age=0; Path=/; HttpOnly");
  return response;
}

export function OPTIONS() {
  return new Response(null, {
    headers: {
      Allow: "POST",
    },
  });
}
