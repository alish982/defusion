import Image from "next/image";
import type { ComponentPropsWithoutRef, ElementType } from "react";

const BASE_CLASSES = `
  relative inline-flex items-center justify-center rounded-full px-5 cursor-pointer
  font-normal text-white
  transition-all duration-300 ease-out hover:opacity-85
`
  .replace(/\s+/g, " ")
  .trim();

export const GRADIENT_BORDER_CLASSES = `
  before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:p-px
  before:[background:linear-gradient(45deg,#004181_0%,rgba(255,255,255,0.2)_100%)]
  before:[mask-image:linear-gradient(#000,#000),linear-gradient(#000,#000)]
  before:[mask-clip:content-box,border-box]
  before:[mask-composite:exclude]
`
  .replace(/\s+/g, " ")
  .trim();

const VARIANT_CLASSES = {
  gradient: `
    h-12 gap-1.5 text-sm leading-5
    [background-image:radial-gradient(128.68%_444.44%_at_0%_0%,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_78%)]
    ${GRADIENT_BORDER_CLASSES}
  `,
  subtle: `
    h-12 gap-2 text-[16px] leading-[26px] tracking-[-0.3125px]
    [background-image:linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)),radial-gradient(91.27%_333.33%_at_0%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_78%)]
    ${GRADIENT_BORDER_CLASSES}
  `,
  outline: `
    h-12 gap-2 border border-[#272e35]
    text-[16px] leading-none tracking-[-0.3125px]
  `,
};

type GradientButtonProps<T extends ElementType> = {
  as?: T;
  variant?: keyof typeof VARIANT_CLASSES;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function GradientButton<T extends ElementType = "button">({
  as,
  variant = "gradient",
  showArrow = true,
  className = "",
  children,
  ...props
}: GradientButtonProps<T>) {
  const Component: ElementType = as ?? "button";

  return (
    <Component
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant].replace(/\s+/g, " ").trim()} ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <Image
          src="/icons/arrow.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
        />
      )}
    </Component>
  );
}
