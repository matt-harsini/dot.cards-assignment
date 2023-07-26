import { Cart, Logo } from "..";

export default function Navbar() {
  return (
    <nav className="h-[64px] border-b-[1px] p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <Logo style="text-gray-900" />
        <Cart />
      </div>
    </nav>
  );
}
