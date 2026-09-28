import { serverEnv } from "@/app/config/env";
import type { ContactFormValues } from "@/components/ContactUs";
import { resend } from "@/utils/resend";

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const { fullName, email, company, phone, message } =
    (await request.json()) as ContactFormValues;

  if (!fullName || !email || !message) {
    return Response.json(
      { message: "Full name, email, and message are required." },
      { status: 400 },
    );
  }

  const safe = {
    fullName: escapeHtml(fullName),
    email: escapeHtml(email),
    company: escapeHtml(company || "—"),
    phone: escapeHtml(phone || "—"),
    message: escapeHtml(message).replace(/\n/g, "<br/>"),
  };

  try {
    const { data, error } = await resend.emails.send({
      from: `DeepFusion AI Labs <${serverEnv.FROM_EMAIL!}>`,
      to: serverEnv.TO_EMAIL!,
      replyTo: email,
      subject: "New Contact Us Submission",
      html: `
        <h1>New Contact Us Submission</h1>
        <p><strong>Full Name:</strong> ${safe.fullName}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Phone Number:</strong> ${safe.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    try {
      const { error: replyError } = await resend.emails.send({
        from: `DeepFusion AI Labs <${serverEnv.FROM_EMAIL!}>`,
        to: email,
        subject: "Thanks for reaching out to DeepFusion AI Labs",
        html: `
          <p>Hi ${safe.fullName},</p>
          <p>Thank you for reaching out to us. We've received your message and will contact you soon.</p>
          <p>Best regards,<br/>The DeepFusion AI Labs Team</p>
        `,
      });

      if (replyError) {
        console.error("Auto-reply failed:", replyError);
      }
    } catch (err) {
      console.error("Auto-reply threw:", err);
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
