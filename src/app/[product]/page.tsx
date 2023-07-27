import { Footer, Navbar, ProductSlider } from "@/components/ui";
import Quantity from "@/components/ui/Quantity";
import Image from "next/image";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const data = await getData(params.product);

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex-1 max-w-7xl grid grid-cols-1 lg:grid-cols-2 p-4 mx-auto gap-x-12 gap-y-6">
        <ProductSlider data={data} />
        <div className="rounded-3xl shadow-sm flex flex-col gap-y-4">
          <div className="flex-col items-start gap-y-3 flex p-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                {data.brand}
              </h3>
              <span className="text-lg text-[#67696E]">{data.name}</span>
            </div>
            <span className="text-2xl font-medium">{data.price}</span>
          </div>
          <div className="border-b-[1px] pb-4" />
          <div className="p-8">
            <span className="text-xl font-bold tracking-tight mb-2 inline-block">
              Quantity
            </span>
            <Quantity />
          </div>
          <div className="px-7 pb-8">
            <button className="mt-12 lg:mt-0 flex gap-x-2 justify-center items-center black py-5 px-20 rounded-xl w-full lg:mx-0">
              <span className="text-white font-bold text-lg">Add to cart</span>
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight border-b-[1px] pb-3">
            Description
          </h3>
          <p className="text-gray-600 mt-4">
            Energize your look with a fresh take on heritage adidas style. The
            adidas Daily 3.0 Shoes cut a classic profile with a modern suede
            upper. Your walk across campus or commute across town has never
            looked or felt this good.
          </p>
          <ul className="mt-4 list-disc ml-4">
            <li className="text-gray-600">Regular fit</li>
            <li className="text-gray-600">Lace closure</li>
            <li className="text-gray-600">Rubber outsole</li>
            <li className="text-gray-600">Imported</li>
          </ul>
        </div>
        <Image
          src={data.url[3]}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-contain"
          alt={data.name}
        />
      </div>
      <Footer />
    </div>
  );
}
