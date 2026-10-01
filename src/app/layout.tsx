import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Modul Praktikum PAW 2026/2027 | Teknik Informatika ITERA",
    template: "%s | Modul PAW ITERA",
  },
  description:
    "Website modul praktikum mata kuliah Pengembangan Aplikasi Web (PAW) Program Studi Teknik Informatika Institut Teknologi Sumatera (ITERA) Tahun Akademik 2026/2027.",
  keywords: [
    "PAW",
    "Pengembangan Aplikasi Web",
    "Modul Praktikum",
    "ITERA",
    "Teknik Informatika",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="layout-shell">
          <Header />
          <div className="layout-body">
            <Sidebar />
            <main style={{ flex: 1, minWidth: 0 }}>
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
