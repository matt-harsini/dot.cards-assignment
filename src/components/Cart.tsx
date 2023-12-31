"use client";

import { CartContext } from "@/context/Context";
import Link from "next/link";
import { useContext } from "react";

export default function Cart() {
  const Context = useContext(CartContext);
  return (
    <Link href="/cart">
      <button className="flex gap-x-2.5 justify-center items-center py-2 px-6 border-[1px] rounded-lg border-[#201b21]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
        >
          <path
            d="M4.1875 8.875V7.1875C4.1875 5.04297 5.94531 3.25 8.125 3.25C10.2695 3.25 12.0625 5.04297 12.0625 7.1875V8.875H14.3125C15.2266 8.875 16 9.64844 16 10.5625V17.875C16 19.7383 14.4883 21.25 12.625 21.25H3.625C1.72656 21.25 0.25 19.7383 0.25 17.875V10.5625C0.25 9.64844 0.988281 8.875 1.9375 8.875H4.1875ZM5.875 8.875H10.375V7.1875C10.375 5.95703 9.35547 4.9375 8.125 4.9375C6.85938 4.9375 5.875 5.95703 5.875 7.1875V8.875ZM1.9375 10.5625V17.875C1.9375 18.8242 2.67578 19.5625 3.625 19.5625H12.625C13.5391 19.5625 14.3125 18.8242 14.3125 17.875V10.5625H12.0625V12.5312C12.0625 13.0234 11.6758 13.375 11.2188 13.375C10.7266 13.375 10.375 13.0234 10.375 12.5312V10.5625H5.875V12.5312C5.875 13.0234 5.48828 13.375 5.03125 13.375C4.53906 13.375 4.1875 13.0234 4.1875 12.5312V10.5625H1.9375Z"
            fill="#201B21"
          />
        </svg>
        <span>View Cart</span>
        {!!Context?.payload?.length && (
          <span className="flex flex-col items-center justify-center w-[24px] h-[24px] rounded-full text-white bg-[#ec5e2a]">
            {Context.payload.length}
          </span>
        )}
      </button>
    </Link>
  );
}
