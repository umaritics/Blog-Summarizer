"use client";
import BlogSummarizer from "@/components/BlogSummarizer";
import Navbar from "@/components/Navbar";
import ContactUS from "@/components/ContactUs";

export default function SummarizePage() {
  return (
    <main
      className="bg-black text-white min-h-screen mb-0 pb-0 pt-16"
      style={{ backgroundImage: "url('/concisioBg.png')" }}
    >
      <Navbar />

      {/* Wrapper for blur and content */}
      <div className="relative">
        {/* Blur overlay fills the whole section between navbar & footer */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

        {/* Content container with same spacing you had */}
        <div className="relative z-10">
          {/* Blog summarizer with top spacing */}
          <div className="pt-[50px] bg-black bg-opacity-30 p-4 rounded-md max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-8 text-center">
              Blog Summarizer
            </h1>
            <BlogSummarizer />
          </div>

          {/* Spacer before footer */}
          <div className="h-[200px]" />
        </div>
      </div>

      {/* Footer / Contact Section */}
      <section className="contact p-0">
        <ContactUS />
      </section>
    </main>
  );
}
