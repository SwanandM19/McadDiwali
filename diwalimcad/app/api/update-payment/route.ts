import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(req: NextRequest) {
  try {
    const { email, paymentId, orderId, paymentStatus } = await req.json();
    
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db('your_database_name');
    const enrollmentsCollection = db.collection('enrollments');
    
    await enrollmentsCollection.updateOne(
      { email },
      { 
        $set: { 
          paymentId,
          orderId,
          paymentStatus,
          paymentCompletedAt: new Date()
        } 
      }
    );
    
    await client.close();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating payment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update payment' },
      { status: 500 }
    );
  }
}
