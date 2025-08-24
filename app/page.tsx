import Hero from "@/components/hero";
import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavbarDemo />
        <Hero />
      </div>
    </div>
  );
}
