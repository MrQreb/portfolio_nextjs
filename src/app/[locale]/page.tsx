import About from "@/components/custom/about";
import Navbar from "@/components/custom/navbar";

export default function Home() {
  return (
    <main className="w-full bg-[#343131] h-screen pt-1">
      <Navbar/>
      <About/>
    </main>
  );
}