import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sáng Đèn 2026 — Vốn mới · Thị trường mới",
  description: "Chương trình mở cửa vốn và thị trường toàn cầu cho doanh nghiệp Việt.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

