"use client";
import Navbar from "@/components/Navbar";

import ChakraWrapper from "../components/Chakra";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ChakraWrapper>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </ChakraWrapper>
      </body>
    </html>
  );
}
