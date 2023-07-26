import { Cart, Logo, Card } from "@/components";
import { Footer, Navbar } from "@/components/ui";
import Image from "next/image";

type Product = {
  id: number;
  url: string;
  name: string;
  price: string;
  brand: string;
};

async function getData() {
  const res = await fetch("http://localhost:3000/api", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex flex-col h-full">
      <Navbar />
      <div className="flex-1 p-4">
        <header className="w-full mt-8 max-w-7xl mx-auto hero-bg flex md:flex-row flex-col-reverse gap-x-4 rounded-3xl p-10 px-16">
          <div className="flex flex-col flex-1 items-stretch md:items-start justify-around gap-y-4">
            <div>
              <h3 className="mt-6 md:mt-0 text-[#EC5E2A] font-bold text-5xl text-center md:text-start">
                25% off
              </h3>
              <h1 className="text-6xl font-bold mt-4 text-center md:text-start">
                Summer Sale
              </h1>
              <p className="text-xl mt-8 text-center md:text-start">
                Discover our summer styles with discount
              </p>
            </div>
            <button className="mt-12 md:mt-0 justify-self-end flex gap-x-2 justify-center items-center black py-5 px-20 rounded-xl">
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
        <section className="max-w-7xl mx-auto mt-16">
          <h3 className="text-4xl font-bold tracking-tight">
            Explore our latest drops
          </h3>
          <div className="flex gap-x-8 mt-8">
            {data.map((product: Product) => {
              return <Card key={product.id} {...product} />;
            })}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
