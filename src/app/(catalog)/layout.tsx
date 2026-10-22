import { JsonLd } from "@/components/JsonLd";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd />
      {children}
    </>
  );
}
