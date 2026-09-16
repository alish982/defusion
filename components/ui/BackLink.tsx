import Link from "next/link";
import Image from "next/image";
 
type BackLinkProps = {
  href?: string;
  label?: string;
  className?: string;
};
 
export default function BackLink({
  href = "/",
  label = "Back",
  className = "",
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`mb-8 inline-flex items-center gap-2 text-[14px] text-neutral-400 transition-colors hover:text-neutral-100 ${className}`}
    >
      <Image src="/arrow.svg" height={16} width={16} alt="" aria-hidden="true" className="rotate-180"/>
      {label}
    </Link>
  );
}
 