import GsapIntro from "./GsapIntro";
import ResearchDomains from "./ResearchDomain";
import WhyDeepFusion from "./whyDeepFusioin";

export default function About() {
  return (
    <>
      <GsapIntro />
      <ResearchDomains />
      <section id="why" className="py-12 md:py-0">
        <div className="">
          <WhyDeepFusion />
        </div>
      </section>
    </>
  );
}