"use client";

import { COLUMNS, SOCIALS } from "@/Data/Footer";
import Image from "next/image";
import ScrollLink from "@/components/ui/ScrollLink";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="px-5 pt-28">
        <div className="grid divide-y divide-white/10 lg:h-[422px] border hairline sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {COLUMNS.map((col) => (
            <div key={col.title} className="py-5 md:pt-6 px-4 ">
              <p className="text-[14px] md:text-[16px] font-medium font-creato text-paper">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <ScrollLink
                      to={l.href}
                      className="text-[#FFFFFFE0] text-[14px] md:text-[15px] font-normal font-creato transition-colors hover:text-paper"
                    >
                      {l.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="px-4 py-5 md:pt-6 pb-16">
            <p className="text-[14px] md:text-[16px] font-creato font-medium text-paper">
              Contact
            </p>
            <ul className="mt-4 space-y-4 text-[14px] font-creato md:text-[15px]">
              <li>
                <ScrollLink
                  to="mailto:info@deepfusion.ai"
                  className="hover:text-paper"
                >
                  info@deepfusion.ai
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="tel:+9779701122624"
                  className="hover:text-paper"
                >
                  +977-9701122624
                </ScrollLink>
              </li>
              <li>Kupondole, Lalitpur</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-gradient-to-b via-[#141414] to-[#403D3D]">
        <div className="flex items-center justify-between pt-6 px-6">
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <ScrollLink key={s.label} to={s.href} aria-label={s.label}>
                <Image src={s.icon} alt={s.label} width={20} height={20} />
              </ScrollLink>
            ))}
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[16px] text-[#FFFFFFB8] font-normal transition-colors hover:text-paper cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
        <div className="px-5 md:px-0 mt-10 flex justify-center">
          <Image
            src="/logo.svg"
            height={358}
            width={365}
            alt="DeepFusion AI Labs logo"
          />
        </div>

        <div className="mt-10 md:mt-16 flex flex-col-reverse items-start justify-between gap-3 px-5 pb-5 text-[12px] text-[#FFFFFFB8] sm:flex-row sm:items-center md:text-[14px]">
          <p className="text-sm">© 2026 Copyright DeepFusion AI Labs.</p>
          <Link
            href="https://prixa.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/prixalogo.svg"
              alt="Prixa logo"
              width={100}
              height={28}
              className="h-8 w-auto md:h-6 lg:h-11"
            />
          </Link>
          <div className="flex items-center gap-4">
            <ScrollLink to="#" className="hover:text-paper">
              Privacy Policy
            </ScrollLink>

            <ScrollLink to="#" className="hover:text-paper">
              Terms &amp; Conditions
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}
