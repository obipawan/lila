import type { Metadata } from "next";
import { NextTamaguiProvider } from "./NextTamaguiProvider";
import './font.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: '/lightning.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTamaguiProvider>
          {children}
        </NextTamaguiProvider>
      </body>
    </html>
  );
}
