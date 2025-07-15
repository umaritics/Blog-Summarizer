import React, { useState } from 'react';
 import jsPDF from 'jspdf';



const BlogSummarizer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [blogSnippet, setBlogSnippet] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary('');
    setBlogSnippet('');

  
    try {
      const res = await fetch('/api/Summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setBlogSnippet(data.snippet);
      setSummary(data.summary);
    } catch (error) {
      console.error('Error summarizing blog:', error);
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
    <div className="w-full max-w-3xl mx-auto p-4 bg-zinc-900 rounded-xl shadow-md">
      <h2 className="text-2xl  mb-4">Enter a Blog URL</h2>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com/blog-post"
        className="w-full p-3 rounded mb-4 bg-zinc-800 text-white outline-none"
      />

      <button
        onClick={handleSummarize}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        disabled={loading || !url}
      >
        {loading ? 'Summarizing...' : 'Get Summary'}
      </button>

      {blogSnippet && (
        <div className="mt-6">
          <h3 className="text-xl ">Blog Preview</h3>
          <p className="text-gray-300 mt-2">{blogSnippet}</p>
        </div>
      )}

      {summary && (
        <div className="mt-6">
          <h3 className="text-xl ">Summary</h3>
          <p className="text-gray-200 mt-2">{summary}</p>
          <button
  onClick={() => navigator.clipboard.writeText(summary)}
  className="mt-3 px-3 py-2 text-sm bg-white text-black rounded hover:bg-gray-200 transition"
>
  📋 Copy Summary
</button>
<button
  onClick={downloadAsPDF}
  className="mt-3 ml-3 px-3 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
>
  📄 Download as PDF
</button>

<button
  onClick={() => {
    setUrl('');
    setSummary('');
    setBlogSnippet('');
  }}
  className="mt-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
>
  
  🔄 Summarize Another Blog
</button>


        </div>
      )}
    </div>
  );
};

export default BlogSummarizer;
