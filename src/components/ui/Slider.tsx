"use client";

import { data } from "@/data";
import Card from "../Card";

type Product = {
  id: number;
  url: string;
  name: string;
  price: string;
  brand: string;
};

export default function Slider() {
  return (
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
  );
}
