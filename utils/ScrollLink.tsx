// components/ScrollLink.tsx
"use client";

export default function ScrollLink({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; 
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    onClick?.(); 
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}