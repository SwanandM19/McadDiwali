import axios from "axios";

export async function createOrderId(amount: number, currency: string, courseName?: string) {
    try {
        const response = await axios.post("/api/createOrder", {
            amount: amount, // Amount in rupees
            currency: currency,
            courseName: courseName
        });

        console.log("Order Response:", response.data);
        return response.data.orderId;
    } catch (error) {
        console.error("Failed to create order:", error);
        throw new Error("Failed to create order");
    }
}
