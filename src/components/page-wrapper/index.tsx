"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import LeftBar from "../sidebar/recruit-bar";
import { useState } from "react";
import Menu from "@components/menu";
export default function FullPagePopupWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen overflow-y-auto flex scrollbar-hidden relative">
      {/* Header */}
      <Header />

      {/* Left side bar */}
      <LeftBar />

      {/* Main page content */}
      {children}

      {/* Right side bar */}
      <Sidebar setIsMenuOpen={setIsMenuOpen} />

      {/* Menu */}
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
