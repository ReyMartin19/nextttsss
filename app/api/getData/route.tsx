import { NextResponse } from "next/server";

export async function GET(){
    const data = ["S", "E", "C", "R", "E", "T", "!"]
    

    return NextResponse.json({
        message: "API Successfully connected",
        data: data
    })
};