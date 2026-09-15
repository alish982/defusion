export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24 xl:px-40 xl:pt-32 ">
      {children}
    </div>
  );
}