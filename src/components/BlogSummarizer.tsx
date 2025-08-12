import React, { useState } from "react";
import jsPDF from "jspdf";

const BlogSummarizer: React.FC = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [blogSnippet, setBlogSnippet] = useState("");
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState({
    title: "",
    author: "",
    siteName: "",
    publishedDate: "",
  });

  const handleSummarize = async () => {
    setMetadata({ title: "", author: "", siteName: "", publishedDate: "" });
    setLoading(true);
    setSummary("");
    setBlogSnippet("");

    try {
      const res = await fetch("/api/Summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setBlogSnippet(data.snippet);
      setSummary(data.summary);
      setMetadata(data.metadata || {});
    } catch (error) {
      console.error("Error summarizing blog:", error);
    }

    setLoading(false);
  };

  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Blog Summary", 10, 10);
    doc.setFontSize(12);
    doc.text(summary, 10, 20);
    doc.save("summary.pdf");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 bg-zinc-900 rounded-xl shadow-md">
      <h2 className="text-xl sm:text-2xl mb-4">Enter a Blog URL</h2>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com/blog-post"
        className="w-full p-3 rounded mb-4 bg-zinc-800 text-white outline-none text-sm sm:text-base"
      />

      <button
        onClick={handleSummarize}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
        disabled={loading || !url}
      >
        {loading ? "Summarizing..." : "Get Summary"}
      </button>

      {blogSnippet && (
        <div className="mt-6">
          <h3 className="text-lg sm:text-xl">Blog Preview</h3>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            {blogSnippet}
          </p>
        </div>
      )}

      {metadata.title && (
        <div className="mt-6 text-gray-400 text-xs sm:text-sm">
          <p>
            <strong>Title:</strong> {metadata.title}
          </p>
          <p>
            <strong>Author:</strong> {metadata.author}
          </p>
          <p>
            <strong>Publication:</strong> {metadata.siteName}
          </p>
          <p>
            <strong>Date Published:</strong> {metadata.publishedDate}
          </p>
        </div>
      )}

      {summary && (
        <div className="mt-6">
          <h3 className="text-lg sm:text-xl">Summary</h3>
          <p className="text-gray-200 mt-2 text-sm sm:text-base">{summary}</p>

          <div className="mt-4 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <button
              onClick={() => navigator.clipboard.writeText(summary)}
              className="px-3 py-2 text-sm bg-white text-black rounded hover:bg-gray-200 transition w-full sm:w-auto"
            >
              📋 Copy Summary
            </button>

            <button
              onClick={downloadAsPDF}
              className="px-3 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition w-full sm:w-auto"
            >
              📄 Download as PDF
            </button>

            <button
              onClick={() => {
                setUrl("");
                setSummary("");
                setBlogSnippet("");
                setMetadata({
                  title: "",
                  author: "",
                  siteName: "",
                  publishedDate: "",
                });
              }}
              className="px-3 py-2 text-sm bg-gray-700 text-white rounded hover:bg-gray-600 transition w-full sm:w-auto"
            >
              🔄 Summarize Another Blog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSummarizer;
