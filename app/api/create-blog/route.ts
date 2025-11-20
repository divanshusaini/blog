import { NextRequest, NextResponse } from "next/server";
import { createBlog } from "@/utils/actions/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { title, content } = body;
    const result = await createBlog(title, content);
    return NextResponse.json(result);
}