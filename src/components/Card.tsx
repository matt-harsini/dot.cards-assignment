import Image from "next/image";
import Link from "next/link";

export default function Card({
  name,
  brand,
  price,
  url,
  id,
}: {
  name: string;
  brand: string;
  price: string;
  url: string;
  id: number;
}) {
  return (
    <Link href={`/${id}`}>
      <div className="flex flex-col">
        <Image src={url} width={546} height={375} alt={name} />
        <h4 className="text-xl font-bold tracking-tight mt-3">{brand}</h4>
        <span className="text-lg text-gray-500">{name}</span>
        <span className="text-lg font-medium">{price}</span>
      </div>
    </Link>
  );
}
