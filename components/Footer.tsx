import { COLUMNS, SOCIALS } from "@/Data/Footer";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-black px-5"
    >
      <div className="py-16 pb-16 lg:px-10">
        <div className="grid gap-y-10 divide-y divide-white/10 border-t hairline sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {COLUMNS.map((col) => (
            <div key={col.title} className="pt-6 lg:px-8 lg:first:pl-0">
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

          <div className="lg:px-8 pt-6 pb-16">
            <p className="text-[13px] font-medium text-paper">Contact</p>
            <ul className="mt-4 space-y-4 text-[13px]">
              <li>
                <a
                  href="mailto:info@deepfusion.ai"
                  className="hover:text-paper"
                >
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

        <div className="flex items-center justify-between border-t hairline pt-6">
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
            height={96}
            width={96}
            alt="DeepFusion AI Labs logo"
          />
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-3 text-[12.5px] text-muted-2 sm:flex-row">
          <p>© 2026 Copyright DeepFusion AI Labs.</p>
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
