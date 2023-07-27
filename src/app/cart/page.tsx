import { Footer, Navbar } from "@/components/ui";

export default function page() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex-1 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 p-4 mx-auto gap-x-12 gap-y-6">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl">Your Bag</h1>
        </div>
        <div className="flex flex-col"></div>
      </div>
      <Footer />
    </div>
  );
}
