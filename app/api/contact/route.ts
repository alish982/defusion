import { serverEnv } from "@/app/config/env";
import type { ContactFormValues } from "@/components/ContactUs";
import { resend } from "@/utils/resend";

export async function POST(request: Request) {
  const { fullName, email, company, phone, message } =
    (await request.json()) as ContactFormValues;

  // Basic guard — don't hit Resend with an empty/garbage payload
  if (!fullName || !email || !message) {
    return Response.json(
      { message: "First name, last name, and message are required." },
      { status: 400 },
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `DeepFusion AI Labs <${serverEnv.FROM_EMAIL!}>`,
      to: serverEnv.TO_EMAIL!,
      subject: "New Contact Us Submission",
      html: `
        <h1>New Contact Us Submission</h1>
        <p><strong>First Name:</strong> ${fullName}</p>
        <p><strong>Last Name:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Phone Number:</strong> ${phone || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(
      {
        message: "Your message has been submitted successfully.",
        data,
      },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { message: "Failed to submit the contact message." },
      { status: 500 },
    );
  }
}
