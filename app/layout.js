import { JetBrains_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import VideoBackground from "@/components/VideoBackground";
import MousePointer from "@/components/Mousepointer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Amit's Portfolio",
  description:
    "A Nextjs Portfolio project which uses ThreeJs , TailwindCSS , Shadcn-ui and Framer-Motion",
  icons: {
    icon: ["./favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <VideoBackground />
        <Header />
        <StairTransition />
        <MousePointer />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
