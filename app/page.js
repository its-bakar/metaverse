import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero/>
      <div className="relative">
      <About/>
      <div className="gradient-03 z-0" />
      </div>
    </div>
  );
}
