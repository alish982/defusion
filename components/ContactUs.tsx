"use client";

import { useState } from "react";
import Image from "next/image";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  message: string;
}

export default function ContactUs() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          company: form.company,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[6px] w-[6px] rotate-45 bg-[#5CAEFF]" />
          <p className="text-[14px] font-normal text-[#FFFFFFB8]">Contact us</p>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-[40px] font-creato font-medium text-paper md:text-[32px]">
          Get to know more about us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Field
              label="First Name"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange("firstName")}
            />
            <Field
              label="Last Name"
              placeholder="Enter your last name"
              value={form.lastName}
              onChange={handleChange("lastName")}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Field
              label="Company"
              placeholder="Enter your company name"
              value={form.company}
              onChange={handleChange("company")}
            />

            <div>
              <label className="text-[16px] font-creato font-medium text-paper">
                Phone number
              </label>
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#9A9FA699] bg-transparent px-4 py-4">
                <span className="text-[16px] leading-none">🇳🇵</span>
                <span className="text-[14px] font-creato text-[#FFFFFFB8]">
                  +977
                </span>
                {/* <ChevronDown className="h-3.5 w-3.5 text-[#FFFFFFB8]" /> */}
                <span className="mx-1 h-4 w-px bg-white/15" />
                <input
                  type="tel"
                  placeholder="000-0000000"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="w-full bg-transparent text-[14px] text-paper placeholder:text-[16px] placeholder:text-[#9A9FA6] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-[16px] font-creato font-medium text-paper">
              Send message
            </label>
            <textarea
              placeholder="Write something..."
              value={form.message}
              onChange={handleChange("message")}
              rows={5}
              className="mt-3 w-full resize-none rounded-lg border border-[#9A9FA699] bg-transparent px-4 py-3 text-[14px] text-paper placeholder:text-[16px] placeholder:text-[#9A9FA6] focus:border-[#5CAEFF]/50 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="group flex w-full cursor-pointer items-center justify-center gap-[6px] rounded-full border hairline border-transparent bg-origin-border px-5 py-4 text-[14px] font-creato font-normal text-paper transition-opacity hover:opacity-85
    [background-image:radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%),linear-gradient(#0a0a0c,#0a0a0c),linear-gradient(45deg,#004181_0%,rgba(255,255,255,0.15)_50%,#0a0a0c_100%)]
    [background-clip:padding-box,padding-box,border-box]"
          >
            {status === "loading" ? "Sending..." : "Get in Touch"}
            <span aria-hidden="true">
              {" "}
              <span aria-hidden="true">
                <Image src="/arrow.svg" alt="arrow" height={18} width={18} />
              </span>
            </span>
          </button>
          {status === "success" && (
            <p className="text-[13px] text-green-400">
              Message sent — we'll be in touch.
            </p>
          )}
          {status === "error" && (
            <p className="text-[13px] text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-[16px] font-creato font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-3 w-full rounded-lg border border-[#9A9FA699] bg-transparent px-4 py-4 text-[14px] text-paper placeholder:text-[16px] placeholder:text-[#9A9FA6] focus:border-[#5CAEFF]/50 focus:outline-none"
      />
    </div>
  );
}
