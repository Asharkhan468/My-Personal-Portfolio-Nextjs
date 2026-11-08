"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/Reveal";
import { blogCategories } from "@/data/blog/categories";
import { blogPosts } from "@/data/blog/posts";
import type { BlogCategory } from "@/types/blog";

const pageSize = 4;

export default function BlogListing({
  initialCategory = "All",
}: {
  initialCategory?: "All" | BlogCategory;
}) {
  const [category, setCategory] = useState<string>(initialCategory);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const searchable = [
        post.title,
        post.description,
        post.category,
        ...post.tags,
      ].join(" ").toLocaleLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [category, search]);

  const featuredPost =
    category === "All" && search.trim() === ""
      ? filteredPosts.find((post) => post.featured)
      : undefined;
  const listPosts = filteredPosts
    .filter((post) => post.slug !== featuredPost?.slug)
    .slice(0, visibleCount);

  function chooseCategory(nextCategory: string) {
    setCategory(nextCategory);
    setVisibleCount(pageSize);
    const url = new URL(window.location.href);
    if (nextCategory === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", nextCategory);
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  }

  return (
    <div className="blog-listing">
      {featuredPost && (
        <section className="blog-featured" aria-label="Featured article">
          <div className="blog-featured-label"><span className="eyebrow-dot" /> Editor&apos;s pick</div>
          <BlogCard post={featuredPost} featured />
        </section>
      )}
      <div className="blog-toolbar">
        <div className="blog-filters" aria-label="Filter articles by category">
          {["All", ...blogCategories].map((item) => (
            <button
              key={item}
              type="button"
              className={`blog-filter${category === item ? " blog-filter-active" : ""}`}
              aria-pressed={category === item}
              onClick={() => chooseCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="blog-search">
          <Search size={17} aria-hidden="true" />
          <span className="visually-hidden">Search articles</span>
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              setVisibleCount(pageSize);
            }}
            placeholder="Search insights"
          />
        </label>
      </div>
      <div className="blog-results-heading">
        <h2>{category === "All" ? "Latest insights" : category}</h2>
        <p>{filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}</p>
      </div>
      {listPosts.length > 0 ? (
        <StaggerGroup className="blog-grid">
          {listPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      ) : (
        <div className="blog-empty">
          <h3>No matching articles</h3>
          <p>Try another search or choose a different topic.</p>
          <button type="button" className="button button-outline" onClick={() => { setSearch(""); chooseCategory("All"); }}>
            Clear filters
          </button>
        </div>
      )}
      {listPosts.length < filteredPosts.filter((post) => post.slug !== featuredPost?.slug).length && (
        <div className="blog-load-more-wrap">
          <button className="button button-outline" type="button" onClick={() => setVisibleCount((count) => count + pageSize)}>
            Load more articles
          </button>
        </div>
      )}
    </div>
  );
}
