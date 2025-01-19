import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  icons: [
    {
      url: "/logo-szn-inverted.png"
    }
  ],

  title: "StreekApp - The ultimate habit tracker",
  description:
    "Streekapp is a habit tracker used to track and monitor or cultivate new healthy habits or to stop certain bad habits"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!bg-darth">
      <body
        className={`${poppins.className} bg-darth w-full h-full flex flex-col `}
      >
        {children}
      </body>

      <Analytics />
    </html>
  );
}
