"use client";

import { useState } from "react";
import type { Category, SubstackPost } from "@/lib/config";

function PostCard({ post }: { post: SubstackPost }) {
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4 transition hover:border-[var(--accent)] hover:shadow-md"
    >
      <span className="text-xs text-[var(--muted)]">{formatDate(post.date)}</span>
      <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)]">
        {post.title}
      </span>
      {post.excerpt && (
        <span className="line-clamp-2 text-sm text-[var(--muted)]">
          {post.excerpt}
        </span>
      )}
      <span className="mt-1 text-sm text-[var(--accent)] opacity-0 transition group-hover:opacity-100">
        Read on Substack →
      </span>
    </a>
  );
}

function BucketCard({
  category,
  isOpen,
  onToggle,
}: {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const count = category.posts.length;

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[var(--background)]/50"
        aria-expanded={isOpen}
        aria-controls={`posts-${category.id}`}
        id={`bucket-${category.id}`}
      >
        <div className="min-w-0 flex-1">
          <h2 className="font-semibold text-[var(--foreground)]">
            {category.name}
          </h2>
          {category.description && (
            <p className="mt-0.5 truncate text-sm text-[var(--muted)]">
              {category.description}
            </p>
          )}
        </div>
        <span className="shrink-0 rounded-full bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)]">
          {count} {count === 1 ? "post" : "posts"}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-[var(--muted)] transition duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`posts-${category.id}`}
        role="region"
        aria-labelledby={`bucket-${category.id}`}
        className={`border-t border-[var(--border)] bg-[var(--background)]/30 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {category.posts.map((post, i) => (
            <PostCard key={`${post.url}-${i}`} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CategoryBuckets({ categories }: { categories: Category[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="mx-auto max-w-4xl px-6 py-10"
      aria-label="Writing by category"
    >
      <h2 className="mb-6 text-center text-lg font-medium text-[var(--muted)]">
        Substack writing by topic
      </h2>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <BucketCard
            key={category.id}
            category={category}
            isOpen={openId === category.id}
            onToggle={() => handleToggle(category.id)}
          />
        ))}
      </div>
    </section>
  );
}
