import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HexaCLOUD",
  description: "Vai de Boa.Vai de HexaCLOUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="px-6 md:px-12 lg:px-24">
        {children}
      </body>
    </html>
  );
}
