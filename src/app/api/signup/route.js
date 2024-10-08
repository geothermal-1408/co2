import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import connectDb from '@/app/utils/dbConnect';
import User from '@/app/models/user';

export async function POST(req) {
  try {
    await connectDb();

    // Check if the request is in JSON format
    const body = await req.json();
    const { username, password } = body;
    console.log('test');

    // Validate that username and password are provided
    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
    }

    const userExists = await User.findOne({ username });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: 'User created' }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}