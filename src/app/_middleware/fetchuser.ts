import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const secert = process.env.JWT_SECRET

export async function GET(req:NextRequest){
    const token = req.headers.get("authtoken")
    console.log(token);
}

