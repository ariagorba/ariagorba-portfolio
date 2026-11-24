import { Plus_Jakarta_Sans, Inter, Aleo, PT_Mono } from "next/font/google";
import "./globals.css";
import "./portfolio-typography.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const aleo = Aleo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-aleo",
  display: "swap",
});

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pt-mono",
  display: "swap",
});

export const metadata = {
  title: "Aria Gorba — Product / UX Designer",
  description: "Product / UX Designer who aims for adoption. Getting products used, not just shipped.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${aleo.variable} ${ptMono.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
