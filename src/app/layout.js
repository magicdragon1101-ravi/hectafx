import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/auth/AuthProvider";
import { supabase } from "@/libs/supabase";

export const metadata = {
  title: "HECTAFX",
  description: "Forex Trading Platform",
};

const RootLayout = async ({ children }) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head>
        <title>HECTAFX</title>
        <link rel="icon" href="/logo.jpg" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className="flex flex-col w-full min-h-screen">
        <Header />
        <main className="flex felx-col flex-1 mt-[70px]">
          <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
