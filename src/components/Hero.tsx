"use client";

import BlogAnimation from "./BlogAnimation";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const firstText = useRef<HTMLParagraphElement | null>(null);
  const secondText = useRef<HTMLParagraphElement | null>(null);
  let xPercent = 0;
  const direction = -1;

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  return (
    <section className="min-h-screen w-full bg-black text-white px-6 sm:px-8 pt-24 flex flex-col items-center justify-between">
      {/* Title */}
      <h1 className="text-[34vw] font-bebas text-neutral-200 leading-none mt-12 tracking-tight text-glow text-center sm:whitespace-nowrap">
        <span className="block sm:hidden leading-none">CONCISIO</span>
        <span className="hidden sm:inline">CONCISIO</span>
      </h1>

      {/* CTA Button */}
      <button
        onClick={() => (window.location.href = "/summarize")}
        className="text-base sm:text-lg md:text-xl group flex items-center gap-2 border border-white text-white px-6 sm:px-10 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:border-black mb-40"
      >
        <span className="leading-none">Summarize</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ➜
        </span>
      </button>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 mt-8">
        {/* Animation */}
        <div className="bg-white rounded-full p-4 sm:p-6 shadow-xl w-fit">
          <BlogAnimation />
        </div>

        {/* Caption */}
        <div className="text-center md:text-right">
          <h2 className="text-xl sm:text-3xl md:text-6xl font-bold uppercase tracking-wide leading-snug">
            Less reading. <br /> More understanding.
          </h2>
        </div>
      </div>

      {/* Bottom Section: Smart Summaries */}
      <div className="sliderContainer mt-10">
        <div className="slider">
          <p ref={firstText}>
            Smart Summaries, Instantly - Smart Summaries, Instantly -{" "}
          </p>
          <p ref={secondText}>
            Smart Summaries, Instantly - Smart Summaries, Instantly -{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
