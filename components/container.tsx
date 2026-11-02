export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24 xl:px-40 ${className}`}>
      {children}
    </div>
  );
}