import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { dbConnect } from "@/services/db";
import "@fortawesome/fontawesome-free/css/all.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Favourite Events",
  description: "Interesting events all over the world",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className="py-8">{children}</main>
        </AuthProvider>
        <ToastContainer
          position="top-right"
          theme="dark"
        ></ToastContainer>
      </body>
    </html>
  );
}
