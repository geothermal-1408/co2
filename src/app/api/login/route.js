import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';import connectDb from '@/app/utils/dbConnect';
import User from '@/app/models/user';

export async function POST(req) {
  await connectDb();
  const { username, password } = await req.json();

  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 400 });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  const response = NextResponse.json({ message: 'Login successful' });
  response.cookies.set('token', token, { httpOnly: true, path: '/' });
  
  return response;
}