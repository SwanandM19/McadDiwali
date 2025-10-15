


import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define schema
const enrollmentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  qualification: String,
  batchPreference: String,
  message: String,
  courseId: String,
  courseTitle: String,
  courseFee: String,
  courseFeeNumeric: Number,
  submittedAt: { type: Date, default: Date.now },
  paymentStatus: { type: String, default: 'pending' }
});

// Create or get model
const Enrollment = mongoose.models.Enrollment || mongoose.model('Enrollment', enrollmentSchema);

// Global connection promise
let cachedConnection: typeof mongoose | null = null;

async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (mongoose.connection.readyState >= 1) {
    cachedConnection = mongoose;
    return cachedConnection;
  }

  cachedConnection = await mongoose.connect(process.env.MONGODB_URI!);
  return cachedConnection;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Connect to MongoDB
    await connectToDatabase();
    
    // Create enrollment
    const enrollment = await Enrollment.create({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      qualification: body.qualification,
      batchPreference: body.batchPreference,
      message: body.message,
      courseId: body.courseId,
      courseTitle: body.courseTitle,
      courseFee: body.courseFee,
      courseFeeNumeric: body.courseFeeNumeric,
    });

    return NextResponse.json({ 
      success: true, 
      enrollmentId: enrollment._id 
    });
  } catch (error) {
    console.error('Error saving enrollment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save enrollment' },
      { status: 500 }
    );
  }
}
