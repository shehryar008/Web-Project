// src/app/api/auth/login/route.js

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../../../backend/db.js';
import Login from '../../../../../backend/models/Login.js';

await dbConnect();

export async function POST(request) {
  try {
    const { identifier, password } = await request.json();

    if (!identifier || !password) {
      return NextResponse.json({ error: 'Identifier and password are required' }, { status: 400 });
    }

    const user = await Login.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    });

    if (!user || !(await user.matchPassword(password))) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id.toString(), username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return NextResponse.json(
      { message: 'Logged in successfully', token, userId: user._id.toString() },
      { status: 200 }
    );
  } catch (err) {
    console.error('[login] unexpected error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
