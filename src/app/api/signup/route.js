import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import dbConnect from '@/app/utils/dbConnect';
import User from '@/app/models/user';
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET


export async function POST(req) {
  try {
    await dbConnect();

    // Check if the request is in JSON format
    const body = await req.json();
    const { username, password, email } = body;
    //console.log('test');

    // Validate that username and password are provided
    if (!username || !password || !email) {
      return NextResponse.json({ message: 'everything is required' }, { status: 400 });
    }

    const userExists = await User.findOne({ username, email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();

    const data = {
      user: {
        id: newUser._id.toString(), // Convert to string to ensure consistency
        username: newUser.username,
        email: newUser.email
      }
    };
    
    const authtoken = jwt.sign(data, secret)

    return NextResponse.json({ message: 'User created',authtoken }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}