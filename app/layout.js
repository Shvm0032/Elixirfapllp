import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import image from "../public/Assets/logos/favicon.ico"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // you can adjust weights as needed
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Your Company - Quality Products & Services",
  description:
    "Leading provider of quality products and exceptional services. Discover our range of solutions designed to meet your needs.",
    icons: {
    icon: "../Assets/logos/favicon.ico",       
    shortcut: "/android.png",    
    apple: "/apple.png", 
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
