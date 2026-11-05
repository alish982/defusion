import LayoutWrapper from "@/components/layouts/LayoutWrapper";

import GsapIntro from "./GsapIntro";
import ResearchDomains from "./ResearchDomain";
import WhyDeepFusion from "./WhyDeepFusion";

export default function AboutSection() {
  return (
    <>
      <GsapIntro />
      <ResearchDomains />
      <section id="why" className="py-12 md:py-0">
        <LayoutWrapper>
          <WhyDeepFusion />
        </LayoutWrapper>
      </section>
    </>
  );
}