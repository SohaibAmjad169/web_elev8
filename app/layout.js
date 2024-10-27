import { Inter } from "next/font/google";
import "./globals.css";

// import Header from './components/Header'
// import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Eleva8",
  description:
    "Web Eleva8 – Elevating your online presence through cutting-edge web solutions. We specialize in creating dynamic, scalable, and innovative digital experiences tailored to your business needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <div>{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
