import { NextResponse } from "next/server";

export async function GET() {
    const data = ["S", "E", "C", "R", "E", "T", "!"]


    const response = NextResponse.json({
        message: "API Successfully connected",
        data: data
    })

    // Adding CORS headers to allow any origin
    response.headers.set("Access-Control-Allow-Origin", "*");  // Allow any origin
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");  // Allow specific methods
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");  // Allow specific headers

    return response;
};