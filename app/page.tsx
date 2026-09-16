import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects";
import Container from "@/components/container";

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="xl:pt-32">
        <About />
        <Projects />
      </Container>
    </>
  );
}
