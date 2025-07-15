import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  console.log("📥 Received URL:", url);

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  try {
    const res = await fetch(url);
    const html = await res.text();
    console.log("📄 Fetched HTML content");

    const $ = cheerio.load(html);
    const title =
      $('meta[property="og:title"]').attr("content") || $("title").text();
    const author = $('meta[name="author"]').attr("content") || "Unknown Author";
    const siteName =
      $('meta[property="og:site_name"]').attr("content") ||
      new URL(url).hostname;
    const publishedDate =
      $('meta[property="article:published_time"]').attr("content") ||
      "Unknown Date";

    const paragraphs = $("p")
      .map((i, el) => $(el).text())
      .get()
      .join("\n\n");
    const text = paragraphs.slice(0, 4000);
    console.log("📚 Extracted article text");

    const hfRes = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
          parameters: {
            max_length: 400,
            min_length: 100,
            do_sample: false,
          },
        }),
      }
    );

    const hfData = await hfRes.json();

    if (!hfData || hfData.error) {
      console.error("❌ Hugging Face Error:", hfData.error);
      return NextResponse.json(
        { error: "Failed to summarize via Hugging Face" },
        { status: 500 }
      );
    }

    const summary = hfData[0]?.summary_text || "No summary found";

    return NextResponse.json({
      snippet: text.slice(0, 300) + "...",
      summary,
      metadata: {
        title,
        author,
        siteName,
        publishedDate,
      },
    });
  } catch (err) {
    console.error("❌ Error in summarize route:", err);
    return NextResponse.json({ error: "Failed to summarize" }, { status: 500 });
  }
}
