import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}
