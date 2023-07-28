"use client";

import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [payload, setPayload] = useState(0);
  
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(payload));
  }, [payload]);

  return (
    <Context.Provider value={{ payload, setPayload }}>
      {children}
    </Context.Provider>
  );
}
