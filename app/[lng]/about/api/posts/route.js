import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST() {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({ body });
}
