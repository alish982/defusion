import { COLUMNS, SOCIALS } from "@/Data/Footer";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="grid divide-y divide-white/10 border hairline sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {COLUMNS.map((col) => (
          <div key={col.title} className="py-5 md:pt-6 px-8 ">
            <p className="text-[14px] font-medium text-paper">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#FFFFFFE0] text-[12px] transition-colors hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="px-8 py-5 md:pt-6 pb-16">
          <p className="text-[13px] font-medium text-paper">Contact</p>
          <ul className="mt-4 space-y-4 text-[13px]">
            <li>
              <a href="mailto:info@deepfusion.ai" className="hover:text-paper">
                info@deepfusion.ai
              </a>
            </li>
            <li>
              <a href="tel:+9779701122624" className="hover:text-paper">
                +977-9701122624
              </a>
            </li>
            <li>Kupondole, Lalitpur</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black via-[#141414] to-[#1F1E1E]">
        <div className="flex items-center justify-between border-t hairline pt-6 px-6">
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-muted-2 transition-colors hover:text-paper"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <a
            href="#top"
            className="text-[13px] text-muted-2 transition-colors hover:text-paper"
          >
            Back to top ↑
          </a>
        </div>
        <div className="mt-10 flex justify-center">
          <Image
            src="/logo.svg"
            height={358}
            width={365}
            alt="DeepFusion AI Labs logo"
          />
        </div>

        <div className="mt-8 px-10 flex flex-col-reverse items-center justify-between gap-3 text-[12.5px] text-muted-2 sm:flex-row">
          <p className="pb-5">© 2026 Copyright DeepFusion AI Labs.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-paper">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-paper">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
