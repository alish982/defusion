import { z } from "zod";

import { contactSchema } from "./contact-schema";

export const RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];
export const RESUME_MAX_BYTES = 2 * 1024 * 1024;

export const applicationSchema = contactSchema
  .pick({ fullName: true, email: true, phone: true, message: true })
  .extend({
    resume: z
      .instanceof(File, { error: "Please upload your resume" })
      .refine((file) => file.size > 0, "Please upload your resume")
      .refine(
        (file) =>
          RESUME_EXTENSIONS.some((extension) =>
            file.name.toLowerCase().endsWith(extension),
          ),
        "Resume must be a pdf, doc or docx file",
      )
      .refine(
        (file) => file.size <= RESUME_MAX_BYTES,
        "Resume must be 2 MB or smaller",
      ),
  });

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
