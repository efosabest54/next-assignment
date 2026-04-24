import SubRouting from "@/components/SubRouting";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SubRouting />
      <div>{children}</div>
    </div>
  );
}
