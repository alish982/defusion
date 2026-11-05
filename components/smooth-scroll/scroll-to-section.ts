import type Lenis from 'lenis';

export function scrollToSection(lenis: Lenis, id: string) {
  const section = document.getElementById(id);

  if (!section) return;

  lenis.start();
  lenis.scrollTo(section);
}
