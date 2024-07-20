import type { Metadata } from "next";
import "./globals.css";
import { MonoFont } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "AI Multimodal Chatbot",
  description: "Chat with ai and your images!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MonoFont.className}>{children}</body>
    </html>
  );
}
