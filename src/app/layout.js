import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"], variable: '--font-poppins' });

export const metadata = {
  title: "Krushi Parcel Seva - Coming Soon",
  description: "Genuine seeds, fertilizers, and pesticides delivered straight to your village.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
