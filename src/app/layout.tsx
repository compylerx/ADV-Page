import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import { siteConfig } from "@/data/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Soluções Jurídicas Estratégicas`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
