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
  url: string[];
  id: number;
}) {
  return (
    <Link href={`${id}`}>
      <div className="flex-col hidden lg:flex">
        <Image src={url[0]} width={546} height={375} alt={name} />
        <h4 className="text-xl font-bold tracking-tight mt-3">{brand}</h4>
        <span className="text-lg text-gray-500">{name}</span>
        <span className="text-lg font-medium">{price}</span>
      </div>
      <div className="block lg:hidden">
        <Image src={url[0]} width={346} height={175} alt={name} />
      </div>
      <div className="lg:hidden flex-col flex">
        <h4 className="text-xl font-bold tracking-tight mt-3">{brand}</h4>
        <span className="text-lg text-gray-500">{name}</span>
        <span className="text-lg font-medium">{price}</span>
      </div>
    </Link>
  );
}
