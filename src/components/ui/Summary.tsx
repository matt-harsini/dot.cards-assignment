"use client";

import { CartContext } from "@/context/Context";
import { useContext } from "react";

type Price = {
  price: number;
};

export default function Summary() {
  const Context = useContext(CartContext);
  const price = Context?.payload.reduce((acc, cur) => {
    acc += +cur.price.substring(1) * cur.counter;
    return acc;
  }, 0);

  return (
    <div className="flex flex-col rounded-2xl shadow-md max-h-max">
      <div className="p-6">
        <h1 className="text-4xl font-bold tracking-tight">Summary</h1>
        <div className="flex justify-between mt-4">
          <span className="mt-4 text-lg font-medium tracking-tight">
            Subtotal
          </span>
          <span>${price}</span>
        </div>
        <div className="flex justify-between">
          <span className="mt-4 text-lg font-medium tracking-tight">
            Shipping and delivery
          </span>
          <span>$30.00</span>
        </div>
        <div className="flex justify-between">
          <span className="mt-4 text-lg font-medium tracking-tight">Tax</span>
          <span>$30.00</span>
        </div>
        <div className="flex justify-between">
          <span className="mt-4 text-lg font-medium tracking-tight">
            Discount
          </span>
          <span>$30.00</span>
        </div>
      </div>
      <div className="border-b-[1px]" />
      <div className="p-6">
        <div className="flex justify-between">
          <h4 className="font-bold tracking-tight text-xl">Total</h4>
          <span>$30.00</span>
        </div>
      </div>
      <div className="p-6">
        <button className="mt-12 lg:mt-0 justify-self-end flex gap-x-2 justify-center items-center black py-5 px-20 rounded-xl max-w-xl w-full mx-auto lg:mx-0 self-center">
          <span className="text-white font-semibold">Shop Now</span>
          <svg
            className="svg-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.6875 12.7188L13.6875 17.7188C13.5 17.9062 13.25 18 13 18C12.7188 18 12.4688 17.9062 12.2812 17.7188C11.875 17.3438 11.875 16.6875 12.2812 16.3125L15.5625 13H6C5.4375 13 5 12.5625 5 12C5 11.4688 5.4375 11 6 11H15.5625L12.2812 7.71875C11.875 7.34375 11.875 6.6875 12.2812 6.3125C12.6562 5.90625 13.3125 5.90625 13.6875 6.3125L18.6875 11.3125C19.0938 11.6875 19.0938 12.3438 18.6875 12.7188Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
