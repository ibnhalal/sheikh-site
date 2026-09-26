"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { common } from "@/data/common";

export default function CategoryBookList({ books, basePath, color, variant = "grid" }) {
  const { lang } = useLanguage();
  const t = common[lang];

  if (variant === "grid") {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {books.map((book) => (
          <Link
            key={book.slug}
            href={`${basePath}/${book.slug}`}
            className="rounded-[20px] border p-6 flex flex-col justify-between no-underline"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow)",
              color: "var(--text-main)",
            }}
          >
            <div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-main)" }}>
                {book.title[lang]}
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>
                {book.author[lang]}
              </p>
            </div>
            <div
              className="flex items-center justify-between border-t pt-3 text-sm font-bold"
              style={{ borderColor: "var(--border)", color }}
            >
              <span style={{ color: "var(--text-dim)", fontWeight: 400 }}>
                {book.comingSoon
                  ? t.comingSoonTitle
                  : `${book.total} ${t.lessonsCount}`}
              </span>
              <span>{t.viewLessons}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="mb-8">
      {books.map((book) => (
        <Link
          key={book.slug}
          href={`${basePath}/${book.slug}`}
          className="flex items-center justify-between rounded-[20px] border p-5 mb-4 no-underline"
          style={{
            background: "var(--bg-surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
            color: "var(--text-main)",
          }}
        >
          <div>
            <h3 className="text-base font-bold" style={{ color: "#1a4269" }}>
              {book.title[lang]}
            </h3>
            <p className="text-sm" style={{ color: "var(--text-dim)" }}>
              {book.author[lang]}
            </p>
          </div>
          <i className="fa-solid fa-arrow-left" style={{ color }} />
        </Link>
      ))}
    </div>
  );
}
