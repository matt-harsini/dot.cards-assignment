"use client";

import { createContext, useState, useEffect, SetStateAction } from "react";

type Data = {
  id: number;
  brand: string;
  name: string;
  price: string;
  url: string[];
  counter: number;
};

type Context = {
  payload: Data[];
  setPayload: React.Dispatch<SetStateAction<Data[]>>;
};

export const CartContext = createContext<Context | null>(null);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const initialState = () => {
    if (localStorage.getItem("data")) {
      return JSON.parse(localStorage.getItem("data") as string);
    }
    return [];
  };

  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(payload));
  }, [payload]);

  return (
    <CartContext.Provider value={{ payload, setPayload }}>
      {children}
    </CartContext.Provider>
  );
}
