"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { common } from "@/data/common";
import { buildLessons } from "@/data/lessonUtils";
import SectionHeader from "./SectionHeader";
import TelegramCard from "./TelegramCard";
import Footer from "./Footer";
import ComingSoon from "./ComingSoon";

export default function LessonIndex({
  book,
  basePath,
  backHref,
  backLabel,
  color,
  telegram,
}) {
  const { lang } = useLanguage();
  const t = common[lang];

  if (!book) return null;
  if (book.comingSoon) {
    return <ComingSoon backHref={backHref} color={color} />;
  }

  const lessons = buildLessons(book, t.lesson);

  return (
    <div style={{ "--primary": color }}>
      <SectionHeader backHref={backHref} backLabel={backLabel} color={color} />

      <div className="w-[92%] max-w-[800px] mx-auto">
        <div className="text-center py-8">
          <h1
            className="font-amiri text-3xl md:text-4xl font-bold"
            style={{ color }}
          >
            {book.fullTitle ? book.fullTitle[lang] : book.title[lang]}
          </h1>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: "var(--text-dim)" }}
          >
            {book.authorSub ? book.authorSub[lang] : book.author[lang]}
          </p>
          {book.pdfUrl && (
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-xl border-2 font-bold no-underline"
              style={{ borderColor: "#ef4444", color: "#ef4444" }}
            >
              <i className="fa-solid fa-file-pdf" />
              <span>{t.downloadPdf}</span>
            </a>
          )}
        </div>

        {/* Lightweight index: just links, no <audio> elements load here */}
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {lessons.map((l) => (
            <Link
              key={l.n}
              href={`${basePath}/${l.n}`}
              className="flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 no-underline"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
                color: "var(--text-main)",
              }}
            >
              <span className="flex items-center gap-3 font-bold">
                <i
                  className="fa-solid fa-headphones"
                  style={{ color }}
                />
                {l.label}
              </span>
              <i
                className={
                  lang === "en"
                    ? "fa-solid fa-arrow-left"
                    : "fa-solid fa-arrow-right"
                }
                style={{ color: "var(--text-dim)" }}
              />
            </Link>
          ))}
        </div>

        <TelegramCard href={telegram} color={color} />
      </div>

      <Footer extra={book.footerDesc?.[lang]} />
    </div>
  );
}
