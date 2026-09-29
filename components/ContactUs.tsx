"use client";

import { useState } from "react";
import Image from "next/image";
import { contactSchema, type ContactFormValues } from "@/utils/contactschema";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const emptyForm: ContactFormValues = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export default function ContactUs() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [form, setForm] = useState<ContactFormValues>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleChange =
    (field: keyof ContactFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      // clear the error for this field as the user edits it
      setErrors((prev) =>
        prev[field] ? { ...prev, [field]: undefined } : prev,
      );
      if (status !== "idle" && status !== "loading") setStatus("idle");
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[6px] w-[6px] rotate-45 bg-[#5CAEFF]" />
          <p className="text-[14px] font-normal text-[#FFFFFFB8]">Contact us</p>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-[1.75rem] md:text-[40px] font-creato font-medium text-paper md:text-[32px]">
          Get to know more
          <br className="md:hidden" /> about us
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-12 space-y-4 md:space-y-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Field
              label="Full Name"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange("fullName")}
              error={errors.fullName}
            />
            <Field
              label="Email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Field
              label="Company"
              placeholder="Enter your company name"
              value={form.company}
              onChange={handleChange("company")}
              error={errors.company}
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
                <span className="mx-1 h-4 w-px bg-white/15" />
                <input
                  type="tel"
                  placeholder="000-0000000"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={!!errors.phone}
                  className="w-full bg-transparent text-[14px] text-paper placeholder:text-[16px] placeholder:text-[#9A9FA6] focus:outline-none"
                />
              </div>
              {errors.phone && <FieldError message={errors.phone} />}
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
              aria-invalid={!!errors.message}
              className="mt-3 w-full resize-none rounded-lg border border-[#9A9FA699] bg-transparent px-4 py-3 text-[14px] text-paper placeholder:text-[16px] placeholder:text-[#9A9FA6] focus:border-[#5CAEFF]/50 focus:outline-none"
            />
            {errors.message && <FieldError message={errors.message} />}
          </div>

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

          <button
            type="submit"
            disabled={status === "loading"}
            className="relative flex h-14 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full px-5 text-sm font-creato font-normal leading-5 text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60
              [background-image:radial-gradient(128.68%_444.44%_at_0%_0%,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_78%)]
              before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:p-px
              before:[background:linear-gradient(45deg,#004181_0%,rgba(255,255,255,0.2)_100%)]
              before:[-webkit-mask-image:linear-gradient(#000,#000),linear-gradient(#000,#000)]
              before:[-webkit-mask-clip:content-box,border-box]
              before:[-webkit-mask-composite:xor]
              before:[mask-image:linear-gradient(#000,#000),linear-gradient(#000,#000)]
              before:[mask-clip:content-box,border-box]
              before:[mask-composite:exclude]"
          >
            {status === "loading" ? "Sending..." : "Get in Touch"}
            <Image
              src="/arrow.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </section>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <p role="alert" className="mt-2 text-[13px] text-red-400">
      {message}
    </p>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-[16px] font-creato font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className="mt-1 md:mt-3 w-full rounded-lg border border-[#9A9FA699] bg-transparent px-4 py-4 text-[14px] text-paper placeholder:text-[16px] placeholder:text-[#9A9FA6] focus:border-[#5CAEFF]/50 focus:outline-none"
      />
      {error && <FieldError message={error} />}
    </div>
  );
}
