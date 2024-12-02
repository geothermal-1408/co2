import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import dbConnect from '@/app/utils/dbConnect';
import User from '@/app/models/user';

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Email not found' }, { status: 400 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
  }

  const token = jwt.sign({ email: user.email, name: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  const response = NextResponse.json({ message: 'Login successful', "co2-token": token });
  response.cookies.set('co2-token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 24 * 60 * 60
  });

  return response;
}