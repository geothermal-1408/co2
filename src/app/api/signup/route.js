import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import dbConnect from '@/app/utils/dbConnect';
import User from '@/app/models/user';
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    await dbConnect();

    // Parse JSON body
    const body = await req.json();
    const { username, password, email } = body;

    // Validate input
    if (!username || !password || !email) {
      return NextResponse.json({ message: 'everything is required' }, { status: 400 });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();

    // Create JWT
    const data = {
      user: {
        id: newUser._id.toString()
      },
    };
    const authtoken = jwt.sign(data, secret, { expiresIn: '1d' });

    // Create response
    const response = NextResponse.json({ message: 'User created' }, { status: 201 });

    // Set cookie
    response.cookies.set('co2-token', authtoken, {
      httpOnly: true, // Prevent JavaScript access to cookies
      maxAge: 24 * 60 * 60, // Token expiration: 1 day
      path: '/', // Available across the entire application
    });

    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
