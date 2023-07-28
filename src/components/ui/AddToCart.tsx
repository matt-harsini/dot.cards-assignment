"use client";

import { CartContext } from "@/context/Context";
import { useContext, useState } from "react";

type Data = {
  id: number;
  brand: string;
  name: string;
  price: string;
  url: string[];
  counter: number;
};

export default function AddToCart({
  data,
}: {
  data: { brand: string; name: string; price: string; id: number };
}) {
  const [counter, setCounter] = useState(1);

  const Context = useContext(CartContext);

  const handleClick = () => {
    if (!Context) return;
    if (Context.payload.filter((e) => e.id === data.id).length === 0)
      Context.setPayload(
        (prevState) => [...prevState, { ...data, counter }] as Data[]
      );
    Context.setPayload(
      (prevState) =>
        prevState.map((product) => {
          return product.id === data.id ? { ...data, counter } : { ...product };
        }) as Data[]
    );
  };

  return (
    <div className="rounded-3xl shadow-md flex flex-col gap-y-4">
      <div className="flex-col items-start gap-y-3 flex p-8">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{data.brand}</h3>
          <span className="text-lg text-[#67696E]">{data.name}</span>
        </div>
        <span className="text-2xl font-medium">{data.price}</span>
      </div>
      <div className="border-b-[1px] pb-4" />
      <div className="p-8">
        <span className="text-xl font-bold tracking-tight mb-2 inline-block">
          Quantity
        </span>
        <Quantity counter={counter} setCounter={setCounter} />
      </div>
      <div className="px-7 pb-8" onClick={handleClick}>
        <button className="mt-12 lg:mt-0 flex gap-x-2 justify-center items-center black py-5 px-20 rounded-xl w-full lg:mx-0">
          <span className="text-white font-bold text-lg">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export function Quantity({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center justify-between gap-x-2 py-2 border-[1px] w-[127px] rounded-xl relative">
      <button
        className="flex items-center justify-center p-2"
        onClick={() =>
          setCounter((prevState) => (prevState !== 0 ? prevState - 1 : 0))
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M17.5 13H6.5C5.9375 13 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11 6.5 11H17.5C18.0312 11 18.5 11.4688 18.5 12C18.5 12.5625 18.0312 13 17.5 13Z"
            fill="#201B21"
          />
        </svg>
      </button>
      <span className="absolute inset-0 mx-auto max-w-max max-h-max my-auto">
        {counter}
      </span>
      <button
        className="flex items-center justify-center p-2"
        onClick={() => setCounter((prevState) => prevState + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.5 12C18.5 12.5625 18.0312 13.0312 17.5 13.0312H13V17.5312C13 18.0625 12.5312 18.5 12 18.5C11.4375 18.5 11 18.0625 11 17.5312V13.0312H6.5C5.9375 13.0312 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11.0312 6.5 11.0312H11V6.53125C11 5.96875 11.4375 5.5 12 5.5C12.5312 5.5 13 5.96875 13 6.53125V11.0312H17.5C18.0312 11 18.5 11.4688 18.5 12Z"
            fill="#201B21"
          />
        </svg>
      </button>
    </div>
  );
}
