import About from "@/components/custom/about";
import Navbar from "@/components/custom/navbar";
import Stack from "@/components/custom/stack";

export default function Home() {
  return (
    <main className="w-full bg-[#343131] h-[1500px] pt-1">
      <Navbar/>
      <About/>
      <Stack/>
    </main>
  );
}