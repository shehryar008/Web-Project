import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '../../../../../backend/db.js';
import Login from '../../../../../backend/models/Login.js';

await dbConnect();

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    console.log('[signup] body:', { username, email, password });
    console.log('[signup] db state:', mongoose.connection.readyState);

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    const byUsername = await Login.findOne({ username });
    if (byUsername) {
      return NextResponse.json(
        { error: 'Username already taken' },
        { status: 400 }
      );
    }

    if (email) {
      const byEmail = await Login.findOne({ email });
      if (byEmail) {
        return NextResponse.json(
          { error: 'Email already in use' },
          { status: 400 }
        );
      }
    }

    const newUser = new Login({ username, email, password });
    await newUser.save();
    console.log('[signup] created user:', newUser._id);

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (err) {
    console.error('[signup] unexpected error:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
