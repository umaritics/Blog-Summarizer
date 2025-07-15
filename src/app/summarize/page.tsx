'use client';
import BlogSummarizer from '@/components/BlogSummarizer';
import Navbar from '@/components/Navbar'


export default function SummarizePage() {
  return (
    <main className="bg-black text-white min-h-screen p-4 pt-24">
        <Navbar/>
      <h1 className="text-6xl font-bold mb-8 text-center">Blog Summarizer</h1>
      <BlogSummarizer />
    </main>
  );
}
