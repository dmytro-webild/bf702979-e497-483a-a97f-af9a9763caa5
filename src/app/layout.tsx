import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Elixir Cosmooo | جمالك يبدأ من هنا',
  description: 'Elixir Cosmooo وجهتك الأولى للمنتجات الأصلية والعناية بالبشرة والمكياج بأفضل جودة في العراق.',
  openGraph: {
    "title": "Elixir Cosmooo | جمالك يبدأ من هنا",
    "description": "أرقى منتجات التجميل والعناية بالبشرة الأصلية في العراق.",
    "siteName": "Elixir Cosmooo",
    "type": "website"
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
