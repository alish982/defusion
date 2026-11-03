"use client";

import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";

type NavLinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function NavLink({
  to,
  className,
  children,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <ScrollLink
        to={to}
        smooth
        duration={500}
        offset={-80}
        className={className}
        onClick={onClick}
      >
        {children}
      </ScrollLink>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem("scrollTarget", to);
    onClick?.();
    router.push("/", { scroll: false });
  };

  return (
    <a href="/" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
