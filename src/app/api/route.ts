import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: 'Out of Office "Ooo" sneakers',
    brand: "Off-White",
    price: "$775",
    url: "/images/p1.png",
  },
  {
    id: 2,
    name: "Nike",
    brand: "Nike Gamma Force",
    price: "$200",
    url: "/images/p2.png",
  },
  {
    id: 3,
    name: "Nike",
    brand: "Cosmic Unity 3",
    price: "$160",
    url: "/images/p3.png",
  },
  {
    id: 4,
    name: "adidas",
    brand: "DAILY 3.0 SHOES",
    price: "$98.99",
    url: "/images/p4.png",
  },
];

export function GET(request: Request) {
  return NextResponse.json(data);
}
