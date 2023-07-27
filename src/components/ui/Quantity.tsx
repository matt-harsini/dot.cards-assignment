"use client";

import { useState } from "react";

export default function Quantity() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="flex items-center justify-start gap-x-2 py-2 border-[1px] max-w-max rounded-xl">
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
      <span>{counter}</span>
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
