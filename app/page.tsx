import { HeroParallaxDemo } from "@/components/hero";
import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <NavbarDemo />
      <HeroParallaxDemo />
    </div>
  );
}
