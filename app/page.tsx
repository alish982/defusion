"use client";

import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects";
import Container from "@/components/container";
import { useEffect } from "react";

const NAVBAR_OFFSET = 80;

export default function Home() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;
    sessionStorage.removeItem("scrollTarget");

    setTimeout(() => {
      const el = document.getElementById(target);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 150);
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
