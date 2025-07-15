'use client'

import BlogAnimation from './BlogAnimation'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Hero() {
   const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  const direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
        }
      );
  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
     gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent});
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }
     
      
  return (
    <section className="h-screen w-full bg-black text-white px-8 pt-24 flex flex-col items-center justify-between">
  {/* Bottom Center: Title */}
<h1 className="text-[34vw] font-bebas text-neutral-200 leading-none mt-12 tracking-tight text-glow">
  CONCISIO
</h1>


  <button onClick={() => window.location.href='/summarize'} className="text-[1vw] group flex  items-center gap-2 border border-white text-white px-11 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:border-black mb-56">
  <span className='leading-none'>Summarize</span>
  <span className="transition-transform duration-300 group-hover:translate-x-1">➜</span>

</button>


  {/* Top Section */}
  <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-20 mt-8">
    {/* Animation */}
    <div className="bg-white rounded-full p-6 shadow-xl w-fit">
      <BlogAnimation />
    </div>

    {/* Caption */}
    <div className="text-right">
      <h2 className="text-2xl md:text-6xl font-bold uppercase tracking-wide leading-snug">
        Less reading. <br />
        More understanding.
      </h2>
      {/* <h1 className='text-white text-3xl md:text-6xl font-bold uppercase tracking-wide leading-snug text-left mt-8'>CONCISIO</h1> */}
    </div>
  </div>
    {/* Bottom Section: Smart Summaries */}
    <div className="sliderContainer">
      <div className="slider">
        <p ref={firstText}>Smart Summaries, Instantly - Smart Summaries, Instantly - </p>
        <p ref={secondText}>Smart Summaries, Instantly - Smart Summaries, Instantly - </p>
      </div>
    </div>


</section>

  )
}
