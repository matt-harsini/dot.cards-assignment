import { Cart, Logo } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between h-[64px] max-w-7xl mx-auto">
        <div className="flex gap-x-2">
          <Logo />
          <h4 className="uppercase font-semibold">sun co.</h4>
        </div>
        <Cart />
      </nav>
      <header className="mt-4 max-w-7xl mx-auto hero-bg flex rounded-3xl p-12">
        <div className="flex flex-col gap-y-4 flex-1">
          <h3 className="text-[#EC5E2A] font-semibold text-5xl uppercase">
            25% off
          </h3>
          <h1>Summer Sale</h1>
          <p>Discover our summer styles with discount</p>
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
    </main>
  );
}
