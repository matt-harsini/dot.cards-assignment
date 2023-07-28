import { Footer, Items, Navbar, Summary } from "@/components/ui";
import { ContextProvider } from "@/context/Context";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col h-full">
      <ContextProvider>
        <Navbar />
        <div className="flex-1 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 p-4 mx-auto gap-x-12 gap-y-6 items-start">
          <div className="flex flex-col gap-y-8">
            <h1 className="font-bold text-4xl">Your Bag</h1>
            <Items />
          </div>
          <Summary/>
        </div>
      </ContextProvider>
      <Footer />
    </div>
  );
}
