import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import WhatsNew from "@/sections/WhatsNew";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero/>
      <div className="relative">
      <About/>
      <div className="gradient-03 z-0" />
      <Explore/>
      </div>
      <GetStarted/>
      <WhatsNew/>
    </div>
  );
}
