import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sáng Đèn — Chương trình Thí điểm Kết nối dòng vốn Toàn cầu",
  description:
    "Chương trình giúp doanh nghiệp Việt Nam tiếp cận dòng vốn quốc tế thông qua hạ tầng kiểm chứng on-chain trong khuôn khổ pháp lý tại Việt Nam",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Sáng Đèn — Chương trình Thí điểm Kết nối dòng vốn Toàn cầu",
    description:
      "Chương trình giúp doanh nghiệp Việt Nam tiếp cận dòng vốn quốc tế thông qua hạ tầng kiểm chứng on-chain trong khuôn khổ pháp lý tại Việt Nam",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/og-sang-den.png",
        width: 1920,
        height: 1080,
        alt: "Sáng Đèn — Chương trình Thí điểm Kết nối dòng vốn Toàn cầu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sáng Đèn — Chương trình Thí điểm Kết nối dòng vốn Toàn cầu",
    description:
      "Chương trình giúp doanh nghiệp Việt Nam tiếp cận dòng vốn quốc tế thông qua hạ tầng kiểm chứng on-chain trong khuôn khổ pháp lý tại Việt Nam",
    images: ["/og-sang-den.png"],
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
