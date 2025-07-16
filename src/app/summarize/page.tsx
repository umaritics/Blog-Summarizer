"use client";
import BlogSummarizer from "@/components/BlogSummarizer";
import Navbar from "@/components/Navbar";

export default function SummarizePage() {
  return (
    <main
      className="bg-black text-white min-h-screen p-4 pt-34"
      style={{ backgroundImage: "url('/concisioBg.png')" }}
    >
      <Navbar />
      <div className="bg-black bg-opacity-30 p-4 rounded-md max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-8 text-center">Blog Summarizer</h1>
        <BlogSummarizer />
      </div>
    </main>
  );
}
