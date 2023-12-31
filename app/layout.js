import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Simple Studios",
  description: "Webpage Creation Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-es">
      <body>
        <Navbar />
        {children}
        <Analytics />
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
