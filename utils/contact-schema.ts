import { z } from "zod";

export const MESSAGE_WORD_LIMIT = 200;
export const MESSAGE_CHARACTER_LIMIT = 1200;

export function getWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean);
}

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
    .pipe(z.email("Enter a valid email address")),
  phone: z
    .string()
    .trim()
    .min(1, "Mobile number is required")
    .regex(/^\d{7,15}$/, "Mobile number must be 7 to 15 digits"),
  organisation: z.string().trim().max(100, "Organisation name is too long"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(
      MESSAGE_CHARACTER_LIMIT,
      `Message must be under ${MESSAGE_CHARACTER_LIMIT} characters`,
    )
    .refine(
      (value) => getWords(value).length <= MESSAGE_WORD_LIMIT,
      `Message must be under ${MESSAGE_WORD_LIMIT} words`,
    ),
  consent: z.literal("on", { error: "Please accept to continue" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
