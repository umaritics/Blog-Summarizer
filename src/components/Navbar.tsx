"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white px-8 py-4 flex justify-between items-center border-b border-white/10">
      {/* Logo / Website Name */}
      <div className="text-4xl font-bebas tracking-wide uppercase">
        <Link href="/">Concisio</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-xl font-medium">
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
      </div>
    </nav>
  );
}
