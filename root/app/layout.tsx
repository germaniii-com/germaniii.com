import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavigationBar from "./_components/NavigationBar";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "German III Felisarta",
  description:
    "I am a software engineer with a diverse skill set in various programming languages and frameworks. \
  I have learned to think fundamentally, becoming language agnostic, and solving problems from its core. \
  From business applications to creative projects, nothing is impossible with my diverse skillset.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
