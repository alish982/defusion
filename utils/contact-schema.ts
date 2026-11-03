import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Full name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  company: z.string().trim().max(100, "Company name is too long"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .refine(
      (v) => /^\d{10}$/.test(v.replace(/[\s-]/g, "")),
      "Phone number must be exactly 10 digits",
    ),
  message: z.string().trim().max(2000, "Message must be under 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;