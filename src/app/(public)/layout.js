import { Montserrat } from "next/font/google";
// import "./globals.css";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sky Blog",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="   ">
          <Navbar />
        </div>
        <div className="  ">{children}</div>
        <div className="  ">
          <Footer />
        </div>
      </body>
    </html>
  );
}
