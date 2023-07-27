import { NextRequest, NextResponse } from "next/server";
import { data } from "@/data";

export function GET(request: NextRequest) {
  if (!request.nextUrl.searchParams.get("id")) return NextResponse.json(data);
  const product = data.find((product) => {
    return String(product.id) === request.nextUrl.searchParams.get("id");
  });
  return NextResponse.json(product);
}
