import { NextRequest, NextResponse } from "next/server";
import { data } from "@/data";

export function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams);
  return NextResponse.json(data);
}
