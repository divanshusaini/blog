import { NextRequest, NextResponse } from "next/server";
import { getBlog } from "@/utils/actions/server";

export async function GET(req: NextRequest){
    const result = await getBlog();
    return NextResponse.json(result);
}