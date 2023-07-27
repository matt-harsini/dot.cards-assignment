import { Footer, Navbar, Slider } from "@/components/ui";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col h-full">
      <Navbar />
      <div className="flex-1 p-4">
        <header className="w-full mt-8 max-w-7xl mx-auto hero-bg flex lg:flex-row flex-col-reverse gap-x-4 rounded-3xl p-10 px-16">
          <div className="flex flex-col flex-1 items-stretch lg:items-start justify-around gap-y-4">
            <div>
              <h3 className="mt-6 lg:mt-0 text-[#EC5E2A] font-bold text-5xl text-center lg:text-start">
                25% off
              </h3>
              <h1 className="text-6xl font-bold mt-4 text-center lg:text-start">
                Summer Sale
              </h1>
              <p className="text-xl mt-8 text-center lg:text-start">
                Discover our summer styles with discount
              </p>
            </div>
            <button className="mt-12 lg:mt-0 justify-self-end flex gap-x-2 justify-center items-center black py-5 px-20 rounded-xl max-w-xl w-full lg:max-w-max mx-auto lg:mx-0">
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
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/images/hero.png"
              alt="Green shoe"
              width={490}
              height={321}
            />
          </div>
        </header>
      </div>
      <Slider />
      <Footer />
    </main>
  );
}
