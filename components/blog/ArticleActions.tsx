"use client";

import { useState } from "react";
import { Link2, Share2 } from "lucide-react";

export function ArticleActions() {
  const [copied, setCopied] = useState(false);

  async function shareArticle() {
    const shareData = { title: document.title, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Unable to copy the article link.", error);
    }
  }

  return (
    <button className="article-share" type="button" onClick={shareArticle}>
      {copied ? <Link2 size={15} /> : <Share2 size={15} />}
      {copied ? "Link copied" : "Share article"}
    </button>
  );
}
