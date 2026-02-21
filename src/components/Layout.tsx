import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-30 pointer-events-none" />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-40 pointer-events-none" />
    </>
  );
};

export default Layout;
