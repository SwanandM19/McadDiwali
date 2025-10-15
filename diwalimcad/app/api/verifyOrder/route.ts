import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export interface VerifyBody {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
}

export async function POST(request: NextRequest) {
    try {
        const { 
            razorpay_order_id, 
            razorpay_payment_id, 
            razorpay_signature 
        }: VerifyBody = await request.json();

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return NextResponse.json(
                { error: "Missing required parameters", success: false }, 
                { status: 400 }
            );
        }

        const secret = process.env.RAZORPAY_KEY_SECRET as string;
        
        if (!secret) { 
            return NextResponse.json(
                { error: "Razorpay secret not found" }, 
                { status: 500 }
            );
        }

        // Generate signature
        const HMAC = crypto.createHmac("sha256", secret);
        HMAC.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const generatedSignature = HMAC.digest("hex");

        // Verify signature
        if (generatedSignature === razorpay_signature) {
            console.log("Payment verified successfully");
            
            // Here you can:
            // 1. Update database with payment status
            // 2. Send confirmation email
            // 3. Enroll student in course
            
            return NextResponse.json(
                { 
                    message: "Payment verified successfully", 
                    success: true,
                    paymentId: razorpay_payment_id
                }
            );
        } else {
            return NextResponse.json(
                { error: "Invalid signature", success: false }, 
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Verification error:", error);
        return NextResponse.json(
            { error: "An error occurred during verification", success: false }, 
            { status: 500 }
        );
    }
}

