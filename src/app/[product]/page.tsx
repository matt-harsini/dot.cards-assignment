import { Footer, Navbar } from "@/components/ui";

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
  console.log(data);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl grid grid-cols-2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
