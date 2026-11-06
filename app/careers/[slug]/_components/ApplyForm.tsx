'use client';

import { useState } from 'react';
import type { ChangeEvent, DragEvent, FormEvent, ReactNode } from 'react';
import Image from 'next/image';
import { useLenis } from 'lenis/react';

import GradientButton from '@/components/ui/Button';
import { CAREERS_EMAIL } from '@/data/careers';
import {
  RESUME_EXTENSIONS,
  applicationSchema,
  type ApplicationFormValues,
} from '@/utils/application-schema';
import {
  MESSAGE_CHARACTER_LIMIT,
  MESSAGE_WORD_LIMIT,
  getWords,
  limitMessage,
} from '@/utils/contact-schema';

const COUNTRY_CODE = '+977';
const NAVBAR_HEIGHT = 88;

type FieldName = keyof ApplicationFormValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const FIELD_CLASSES =
  'rounded-lg border border-[rgba(154,159,166,0.1)] bg-white/1 text-[14px] text-white placeholder:text-[#444648] focus:border-[#5CAEFF]/50 focus:outline-none';
const INPUT_CLASSES = `h-12 w-full px-[17px] ${FIELD_CLASSES}`;

function FieldError({ name, message }: { name: FieldName; message?: string }) {
  if (!message) return null;

  return (
    <p id={`${name}-error`} role="alert" className="text-[13px] text-red-400">
      {message}
    </p>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: FieldName;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-creato text-[14px] font-medium leading-none text-white"
    >
      {children}
    </label>
  );
}

export default function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const lenis = useLenis();
  const [message, setMessage] = useState('');
  const [resumeName, setResumeName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [draftedResume, setDraftedResume] = useState('');

  const invalidProps = (name: FieldName) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const clearFieldError = (e: FormEvent<HTMLFormElement>) => {
    const { name } = e.target as HTMLInputElement;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResumeName(e.target.files?.[0]?.name ?? '');
  };

  const handleResumeDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const input = e.currentTarget.querySelector('input');
    const file = e.dataTransfer.files[0];
    if (!input || !file) return;

    const transfer = new DataTransfer();
    transfer.items.add(file);
    input.files = transfer.files;
    setResumeName(file.name);
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  // There is no backend yet, so this opens a pre-filled draft in the visitor's
  // own mail app. A draft link can't carry a file, so the visitor is told to
  // attach their resume themselves.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const result = applicationSchema.safeParse(
      Object.fromEntries(new FormData(form)),
    );

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName;
        fieldErrors[key] ??= issue.message;
      }
      setErrors(fieldErrors);
      setDraftedResume('');

      const firstInvalid = form.elements.namedItem(
        String(result.error.issues[0].path[0]),
      );
      if (firstInvalid instanceof HTMLElement) {
        firstInvalid.focus();
        // The browser can't reveal a field pinned above the screen by the sticky
        // form. Two frames lets the errors render and the sticky offset update.
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            if (firstInvalid.getBoundingClientRect().top < NAVBAR_HEIGHT) {
              lenis?.scrollTo(0);
            }
          }),
        );
      }
      return;
    }

    setErrors({});
    const { fullName, email, phone, resume } = result.data;

    const body = [
      `Role: ${jobTitle}`,
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Mobile Number: ${COUNTRY_CODE} ${phone}`,
      '',
      'Why this role?',
      result.data.message,
      '',
      `Resume: please attach ${resume.name} to this email before sending.`,
    ].join('\n');

    setDraftedResume(resume.name);
    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
      `Application: ${jobTitle}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={clearFieldError}
      className="flex flex-col gap-8 rounded-xl border border-white/11 bg-[#121212] p-4 lg:p-7"
    >
      <h2 className="font-creato text-[24px] font-normal leading-[1.1] text-white">
        Apply
      </h2>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              className={INPUT_CLASSES}
              {...invalidProps('fullName')}
            />
            <FieldError name="fullName" message={errors.fullName} />
          </div>

          <div className="flex flex-col gap-4">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="example@gmail.com"
              className={INPUT_CLASSES}
              {...invalidProps('email')}
            />
            <FieldError name="email" message={errors.email} />
          </div>

          <div className="flex flex-col gap-3">
            <FieldLabel htmlFor="phone">Mobile Number *</FieldLabel>
            <div className="flex h-12 items-center gap-2 rounded-lg border border-[rgba(154,159,166,0.1)] bg-white/1 px-[17px] focus-within:border-[#5CAEFF]/50">
              <Image
                src="/icons/flag-nepal.png"
                alt=""
                width={12}
                height={16}
                className="h-4 w-3 shrink-0"
              />
              <span className="text-[14px] leading-none text-[#444648]">
                {COUNTRY_CODE}
              </span>
              <Image
                src="/icons/chevron-bottom.svg"
                alt=""
                width={14}
                height={14}
                className="shrink-0"
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                inputMode="numeric"
                autoComplete="tel-national"
                className="h-full min-w-0 flex-1 bg-transparent text-[14px] text-white focus:outline-none"
                {...invalidProps('phone')}
              />
            </div>
            <FieldError name="phone" message={errors.phone} />
          </div>

          <div className="flex flex-col gap-3">
            <FieldLabel htmlFor="message">Why this role? *</FieldLabel>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(limitMessage(e.target.value))}
              maxLength={MESSAGE_CHARACTER_LIMIT}
              placeholder="Write a message..."
              className={`h-[122px] w-full resize-none p-[17px] ${FIELD_CLASSES}`}
              {...invalidProps('message')}
            />
            <p className="text-right text-[12px] leading-none text-white/50">
              {getWords(message).length}/{MESSAGE_WORD_LIMIT} (Words limit)
            </p>
            <FieldError name="message" message={errors.message} />
          </div>

          <div className="flex flex-col gap-3">
            <FieldLabel htmlFor="resume">Resume *</FieldLabel>
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleResumeDrop}
              className={`flex cursor-pointer flex-col items-center gap-4 rounded-lg border bg-white/1 px-[17px] py-[21px] text-center transition-colors focus-within:border-[#5CAEFF]/50 lg:gap-6 ${
                isDragging
                  ? 'border-[#5CAEFF]/50'
                  : 'border-[rgba(154,159,166,0.1)]'
              }`}
            >
              <input
                id="resume"
                name="resume"
                type="file"
                required
                accept={RESUME_EXTENSIONS.join(',')}
                onChange={handleResumeChange}
                className="sr-only"
                {...invalidProps('resume')}
              />
              <Image src="/icons/upload.svg" alt="" width={24} height={24} />
              <span className="flex flex-col items-center gap-3 leading-none">
                <span className="break-all font-creato text-[12px] font-medium text-white lg:text-[14px]">
                  {resumeName || 'Upload file or drag and drop'}
                </span>
                <span className="text-[10px] text-[#444648] lg:text-[12px]">
                  Accepted file types: pdf, doc, docx, Max. file size: 2 MB.
                </span>
              </span>
            </label>
            <FieldError name="resume" message={errors.resume} />
          </div>
        </div>

        <GradientButton type="submit" variant="subtle" className="w-full">
          Apply for this Role
        </GradientButton>

        {draftedResume && (
          <p role="status" className="text-[14px] leading-[1.4] text-white/70">
            Your email app should open with your application. Please attach{' '}
            {draftedResume} before sending.
          </p>
        )}
      </div>
    </form>
  );
}
