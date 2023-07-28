import { Footer, Navbar, ProductSlider } from "@/components/ui";
import AddToCart from "@/components/ui/AddToCart";
import { ContextProvider } from "@/context/Context";
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
      <ContextProvider>
        <Navbar />
        <div className="flex-1 max-w-7xl grid grid-cols-1 lg:grid-cols-2 p-4 mx-auto gap-x-12 gap-y-6">
          <ProductSlider data={data} />
          <AddToCart data={data} />
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
      </ContextProvider>
      <Footer />
    </div>
  );
}
