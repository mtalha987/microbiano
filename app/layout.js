import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you want
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Specify the weights you want
  variable: '--font-poppins',
});

export const metadata = {
  title: "Microbiano",
  description:
    "Microbiano - Delivering cutting-edge microbiological medical solutions from Abu Dhabi, UAE, to enhance patient care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
