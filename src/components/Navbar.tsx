"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const NavLinks = () => (
    <>
      <a
        href={isHome ? "#top" : "/"}
        className="hover:text-gray-400 transition-all duration-200"
      >
        Home
      </a>
      <Link
        href="/summarize"
        className="hover:text-gray-400 transition-all duration-200"
      >
        Summarizer
      </Link>
      <a
        href={isHome ? "#famous-blogs" : "/#famous-blogs"}
        className="hover:text-gray-400 transition-all duration-200"
      >
        Famous Blogs
      </a>
      <a
        href={isHome ? "#about" : "/#about"}
        className="hover:text-gray-400 transition-all duration-200"
      >
        About Us
      </a>
    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white px-6 py-4 flex justify-between items-center border-b border-white/10">
      {/* Logo */}
      <div className="text-3xl sm:text-4xl font-bebas tracking-wide uppercase">
        <Link href="/">Concisio</Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-lg font-medium">
        <NavLinks />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-white/10 flex flex-col gap-6 p-6 text-lg font-medium md:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}
