import { TanstackQueryClientProvider } from "@/providers/tanstackProviders";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading/page";

export const metadata: Metadata = {
  title: "Plantify 결제",
  description: "플랜티파이 서비스의 결제 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full h-screen max-h-screen mx-auto max-w-[500px] text-black p-4`}
      >
        <TanstackQueryClientProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </TanstackQueryClientProvider>
      </body>
    </html>
  );
}
