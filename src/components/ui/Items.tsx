"use client";

import { CartContext } from "@/context/Context";
import { SetStateAction, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Quantity } from "./AddToCart";

type Data = {
  id: number;
  brand: string;
  name: string;
  price: string;
  url: string[];
  counter: number;
};

export default function Items() {
  const Context = useContext(CartContext);

  return (
    <div>
      {Context?.payload.map((product: Data) => {
        return (
          <div key={product.id}>
            <Item {...product} />
          </div>
        );
      })}
    </div>
  );
}

function Item(product: Data) {
  const [counter, setCounter] = useState(product.counter);
  const Context = useContext(CartContext);

  const removeItem = () => {
    const payload = Context?.payload.filter((e) => e.id !== product.id);
    Context?.setPayload(payload as Data[]);
  };

  useEffect(() => {
    Context?.setPayload(
      (prevState) =>
        prevState.map((e) => {
          return e.id === product.id ? { ...product, counter } : { ...e };
        }) as Data[]
    );
  }, [counter]);

  return (
    <div className="flex gap-x-4 border-b-[1px] py-8">
      <Image src={product.url[0]} width={246} height={175} alt={product.name} />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between">
            <h3 className="font-bold text-lg tracking-tight">{product.name}</h3>
            <span>{product.price}</span>
          </div>
          <span className="text-gray-600">{product.brand}</span>
        </div>
        <div className="flex flex-col items-start lg:items-stretch lg:flex-row gap-x-8">
          <Quantity counter={counter} setCounter={setCounter} />
          <button
            className="mt-4 font-bold text-md underline"
            onClick={removeItem}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
