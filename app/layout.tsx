import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://city-arcade.vn"),
  title: "City Arcade — Bất động sản thế hệ mới",
  description: "Khám phá bất động sản được tuyển chọn với công nghệ và am hiểu địa phương.",
  openGraph: {
    title: "City Arcade — Bất động sản thế hệ mới",
    description: "Không gian sống được tuyển chọn bằng công nghệ và am hiểu địa phương.",
    images: [{ url: "/og.png", width: 1732, height: 909 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
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
