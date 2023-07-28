"use client";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ProductSlider({
  data,
}: {
  data: {
    name: string;
    brand: string;
    price: string;
    url: string[];
    id: number;
  };
}) {
  const splide = useRef<any>();
  const btnPrev = useRef<any>();
  const btnNext = useRef<any>();

  useEffect(() => {
    const goPrev = () => {
      splide.current?.go("-1");
    };

    const goNext = () => {
      splide.current?.go("+1");
    };

    const btnLeft = btnPrev.current;
    const btnRight = btnNext.current;

    btnLeft.addEventListener("click", goPrev);
    btnRight.addEventListener("click", goNext);

    return () => {
      btnLeft.removeEventListener("click", goPrev);
      btnRight.removeEventListener("click", goNext);
    };
  }, []);

  return (
    <div className="relative">
      <Splide
        options={{
          perPage: 1,
          arrows: false,
          gap: "30px",
        }}
        ref={splide}
      >
        {data.url.map((image, index) => {
          return (
            <SplideSlide key={image}>
              <Image
                src={data.url[index]}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto mb-16 object-contain"
                alt={data.name}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      <div className="flex mt-12 lg:mt-0 gap-x-12 justify-between items-center w-full absolute bottom-0">
        <button
          className="rounded-full shadow-md h-[40px] w-[40px] flex items-center justify-center"
          ref={btnPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.9922 18.9922C14.2734 18.9922 14.5234 18.8984 14.7109 18.7109C15.1172 18.3359 15.1172 17.6797 14.7109 17.3047L9.42969 11.9922L14.7109 6.71094C15.1172 6.33594 15.1172 5.67969 14.7109 5.30469C14.3359 4.89844 13.6797 4.89844 13.3047 5.30469L7.30469 11.3047C6.89844 11.6797 6.89844 12.3359 7.30469 12.7109L13.3047 18.7109C13.4922 18.8984 13.7422 18.9922 13.9922 18.9922Z"
              fill="#201B21"
            />
          </svg>
        </button>
        <button
          ref={btnNext}
          className="rounded-full shadow-md h-[40px] w-[40px] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.0078 18.9922C9.72656 18.9922 9.47656 18.8984 9.28906 18.7109C8.88281 18.3359 8.88281 17.6797 9.28906 17.3047L14.5703 11.9922L9.28906 6.71094C8.88281 6.33594 8.88281 5.67969 9.28906 5.30469C9.66406 4.89844 10.3203 4.89844 10.6953 5.30469L16.6953 11.3047C17.1016 11.6797 17.1016 12.3359 16.6953 12.7109L10.6953 18.7109C10.5078 18.8984 10.2578 18.9922 10.0078 18.9922Z"
              fill="#201B21"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
