import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export { inter as BodyFont, roboto_mono as MonoFont };
