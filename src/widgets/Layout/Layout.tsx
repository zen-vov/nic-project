import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: ReactNode;
  type?: "login" | "profile";
}

export default function Layout({ children, type }: LayoutProps) {
  return (
    <main className="main">
      {type === "login" && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
      {type === "profile" && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </main>
  );
}
