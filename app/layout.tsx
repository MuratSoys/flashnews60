import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlashNews60 | İzmir Flash Haber",
  description: "İzmir'de son 60 dakikada neler oluyor?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
