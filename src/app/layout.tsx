import type { Metadata } from "next";
import "./globals.css";
import Footer from './components/footer/footer';
import Header from './components/header/header';

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
  <body>
      <Header />
      <main className="px-6 md:px-12 lg:px-12 xl:px-48 flex flex-col min-h-screen">
        {children}
      </main>
      <Footer />
  </body>
</html>
  );
}
