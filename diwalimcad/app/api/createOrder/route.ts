import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const key_id = process.env.RAZORPAY_KEY_ID as string;
const key_secret = process.env.RAZORPAY_KEY_SECRET as string;

if (!key_id || !key_secret) {
    throw new Error("Razorpay keys are missing in environment variables");
}

const razorpay = new Razorpay({
    key_id,
    key_secret
});

export interface OrderBody {
    amount: number;
    currency: string;
    courseName?: string;
}

export async function POST(request: NextRequest) {
    try {
        const { amount, currency, courseName }: OrderBody = await request.json();
        
        if (!amount) {
            return NextResponse.json(
                { message: "Amount is required" }, 
                { status: 400 }
            );
        }

        const options = {
            amount: amount * 100, // Convert to paise
            currency: currency || "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                course: courseName || "MCAD Course"
            }
        };

        const order = await razorpay.orders.create(options);
        console.log("Order Created Successfully:", order.id);

        return NextResponse.json(
            { 
                orderId: order.id,
                amount: order.amount,
                currency: order.currency
            }, 
            { status: 200 }
        );

    } catch (error) {
        console.error("Order creation error:", error);
        return NextResponse.json(
            { message: "Server Error", error }, 
            { status: 500 }
        );
    }
}
