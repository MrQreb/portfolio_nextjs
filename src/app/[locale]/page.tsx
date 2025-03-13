import About from "@/components/custom/about";
import Education from "@/components/custom/education";
import Navbar from "@/components/custom/navbar";
import Projects from "@/components/custom/projects/projects";
import Stack from "@/components/custom/stack";

export default function Home() {
  return (
    <main className="w-full bg-[#1a1919] h-auto pt-1 pb-1">
      <Navbar/>
      <About/>
      <Stack/>
      <Projects/>
      <Education></Education>
    </main>
  );
}