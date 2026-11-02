import Image from "next/image";
import type { ComponentPropsWithoutRef, ElementType } from "react";

const BASE_CLASSES = `
  relative inline-flex h-12 items-center justify-center gap-1.5 rounded-full px-5 cursor-pointer
  text-sm font-normal leading-5 text-white
  transition-all duration-300 ease-out hover:opacity-85
  [background-image:radial-gradient(128.68%_444.44%_at_0%_0%,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_78%)]
  before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:p-px
  before:[background:linear-gradient(45deg,#004181_0%,rgba(255,255,255,0.2)_100%)]
  before:[mask-image:linear-gradient(#000,#000),linear-gradient(#000,#000)]
  before:[mask-clip:content-box,border-box]
  before:[mask-composite:exclude]
`
  .replace(/\s+/g, " ")
  .trim();

type GradientButtonProps<T extends ElementType> = {
  as?: T;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function GradientButton<T extends ElementType = "button">({
  as,
  showArrow = true,
  className = "",
  children,
  ...props
}: GradientButtonProps<T>) {
  const Component: ElementType = as ?? "button";

  return (
    <Component className={`${BASE_CLASSES} ${className}`} {...props}>
      {children}
      {showArrow && (
        <Image
          src="/arrow.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
        />
      )}
    </Component>
  );
}
