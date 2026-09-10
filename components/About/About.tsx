import GsapIntro from "./GsapIntro";
import ResearchDomains from "./ResearchDomain";
import WhyDeepFusion from "./whyDeepFusioin";

export default function About() {
  return (
    <>
      <GsapIntro />
      <ResearchDomains />
      <section id="why" className="py-12 md:py-0">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <WhyDeepFusion />
        </div>
      </section>
    </>
  );
}