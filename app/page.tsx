"use client";

import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects";
import Container from "@/components/container";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);
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
