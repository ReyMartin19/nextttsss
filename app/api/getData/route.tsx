import { NextResponse } from "next/server";

export async function GET(){
    const data = ["Melbert", "Linson", "Rey", "Kenneth", "Charlie", "Mark", "Fred"]

    return NextResponse.json({
        message: "API Successfully connected",
        data: data
    })
};