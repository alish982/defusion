'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import Image from 'next/image';

import GradientButton from '@/components/ui/Button';
import {
  MESSAGE_CHARACTER_LIMIT,
  MESSAGE_WORD_LIMIT,
  contactSchema,
  getWords,
  type ContactFormValues,
} from '@/utils/contact-schema';

const COUNTRY_CODE = '+977';

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const FIELD_CLASSES =
  'rounded-lg border border-[rgba(154,159,166,0.1)] bg-white/8 text-[14px] text-white placeholder:text-[#444648] focus:border-[#5CAEFF]/50 focus:outline-none md:text-[16px]';
const INPUT_CLASSES = `h-12 w-full px-[17px] ${FIELD_CLASSES}`;

function FieldError({
  name,
  message,
}: {
  name: keyof ContactFormValues;
  message?: string;
}) {
  if (!message) return null;

  return (
    <p id={`${name}-error`} role="alert" className="text-[13px] text-red-400">
      {message}
    </p>
  );
}

function FieldLabel({
  htmlFor,
  required = false,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-creato text-[14px] font-medium leading-none text-white md:text-[16px]"
    >
      {children}
      {required && <span className="text-[#5CAEFF]"> *</span>}
    </label>
  );
}

export default function ContactForm({ email }: { email: string }) {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const wordCount = getWords(message).length;

  const invalidProps = (name: keyof ContactFormValues) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const words = getWords(e.target.value);
    const withinWordLimit =
      words.length > MESSAGE_WORD_LIMIT
        ? words.slice(0, MESSAGE_WORD_LIMIT).join(' ')
        : e.target.value;
    setMessage(withinWordLimit.slice(0, MESSAGE_CHARACTER_LIMIT));
  };

  const clearFieldError = (e: FormEvent<HTMLFormElement>) => {
    const { name } = e.target as HTMLInputElement;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // There is no email backend yet, so this opens a pre-filled draft in the
  // visitor's own mail app rather than sending anything from the site.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const result = contactSchema.safeParse(
      Object.fromEntries(new FormData(form)),
    );

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        fieldErrors[key] ??= issue.message;
      }
      setErrors(fieldErrors);

      const firstInvalid = form.elements.namedItem(
        String(result.error.issues[0].path[0]),
      );
      (firstInvalid as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    const { fullName, email: senderEmail, phone, organisation } = result.data;

    const body = [
      `Full Name: ${fullName}`,
      `Email: ${senderEmail}`,
      `Mobile Number: ${COUNTRY_CODE} ${phone}`,
      `Organisation: ${organisation || '-'}`,
      '',
      result.data.message,
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      'Contact enquiry',
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      onChange={clearFieldError}
      className="flex min-w-0 flex-1 flex-col gap-8 md:gap-10 max-w-[768px]"
    >
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col gap-4 md:gap-3">
          <FieldLabel htmlFor="fullName" required>
            Full Name
          </FieldLabel>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className={INPUT_CLASSES}
            {...invalidProps('fullName')}
          />
          <FieldError name="fullName" message={errors.fullName} />
        </div>

        <div className="flex flex-col gap-4 md:gap-3">
          <FieldLabel htmlFor="email" required>
            Email
          </FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@gmail.com"
            className={INPUT_CLASSES}
            {...invalidProps('email')}
          />
          <FieldError name="email" message={errors.email} />
        </div>

        <div className="flex flex-col gap-3 max-md:order-1">
          <FieldLabel htmlFor="phone" required>
            Mobile Number
          </FieldLabel>
          <div className="flex h-12 items-center gap-2 rounded-lg border border-[rgba(154,159,166,0.1)] bg-white/8 px-[17px] focus-within:border-[#5CAEFF]/50">
            <Image
              src="/icons/flag-nepal.png"
              alt=""
              width={12}
              height={16}
              className="h-4 w-3 shrink-0"
            />
            <span className="text-[14px] leading-none text-[#444648] md:text-[16px]">
              {COUNTRY_CODE}
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="numeric"
              className="h-full min-w-0 flex-1 bg-transparent text-[14px] text-white focus:outline-none md:text-[16px]"
              {...invalidProps('phone')}
            />
          </div>
          <FieldError name="phone" message={errors.phone} />
        </div>

        <div className="flex flex-col gap-4 md:gap-3">
          <FieldLabel htmlFor="organisation">
            Organisation (Optional)
          </FieldLabel>
          <input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="Enter your organisation"
            className={INPUT_CLASSES}
            {...invalidProps('organisation')}
          />
          <FieldError name="organisation" message={errors.organisation} />
        </div>

        <div className="flex flex-col gap-3 max-md:order-2 md:col-span-2">
          <FieldLabel htmlFor="message" required>
            Send message
          </FieldLabel>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={handleMessageChange}
            maxLength={MESSAGE_CHARACTER_LIMIT}
            placeholder="Write something..."
            className={`h-[114px] w-full resize-none p-[17px] md:h-[137px] ${FIELD_CLASSES}`}
            {...invalidProps('message')}
          />
          <p
            id="message-count"
            className="text-right text-[12px] leading-none text-white/50 md:text-[14px]"
          >
            {wordCount}/{MESSAGE_WORD_LIMIT} words · {message.length}/
            {MESSAGE_CHARACTER_LIMIT} characters
          </p>
          <FieldError name="message" message={errors.message} />
        </div>

        <div className="flex flex-col gap-2 max-md:order-3 md:col-span-2">
          <label className="flex cursor-pointer items-center gap-2 text-[12px] leading-[1.4] text-white md:items-start md:text-[14px] xl:items-center">
            <span className="relative size-[18px] shrink-0 md:mt-px xl:mt-0">
              <input
                name="consent"
                type="checkbox"
                required
                className="peer absolute inset-0 cursor-pointer appearance-none rounded-[2px] border border-[#374151] checked:border-[#5CAEFF] checked:bg-[#5CAEFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CAEFF]"
                {...invalidProps('consent')}
              />
              <svg
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden peer-checked:block"
              >
                <path
                  d="M4.5 9.5L7.5 12.5L13.5 6"
                  stroke="#050506"
                  strokeWidth="1.75"
                />
              </svg>
            </span>
            I agree to the information to respond to your enquiry in accordance
            with our Privacy Policy.
          </label>
          <FieldError name="consent" message={errors.consent} />
        </div>
      </div>

      <GradientButton type="submit" variant="subtle" className="w-full">
        Contact Us
      </GradientButton>
    </form>
  );
}
