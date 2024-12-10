import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: process.env.GROQ_BASE_URL,
});

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const result = await generateText({
      model: groq("gemma2-9b-it"),
      prompt: text,
    });
    return NextResponse.json(result.text, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
