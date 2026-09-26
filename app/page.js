"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LangSwitcher from "@/components/LangSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { homeText, categories, readingNow, latestAdded } from "@/data/home";
import { getSearchIndex, searchIndex } from "@/lib/searchIndex";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = homeText[lang];
  const [query, setQuery] = useState("");

  const q = query.trim();
  const searchActive = q.length > 0;

  // Site-wide index: every section + every single book across every
  // section, built once and re-searched on every keystroke.
  const fullIndex = useMemo(() => getSearchIndex(), []);
  const results = useMemo(() => searchIndex(fullIndex, q), [fullIndex, q]);

  return (
    <div>
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b py-3"
        style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
      >
        <div className="w-[92%] max-w-[1150px] mx-auto flex items-center justify-between gap-3 flex-wrap">
          <LangSwitcher />
          <div className="text-center">
            <span
              className="block text-xs font-light"
              style={{ color: "var(--text-dim)" }}
            >
              {lang === "ar"
                ? "الموقع  لفضيلة "
                : lang === "en"
                ? "Official Website of "
                : "የሸይኽ  ድረ-ገጽ "}
            </span>
            <span
              className="font-amiri font-bold text-lg"
              style={{ color: "var(--primary)" }}
            >
              الشيخ محمد زين بن آدم
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/help"
              className="no-underline"
              style={{ color: "var(--text-dim)" }}
              title="الأسئلة والاقتراحات"
            >
              <i className="fa-regular fa-comments text-lg" />
            </Link>
          </div>
        </div>
      </header>

      <section className="text-center pt-16 pb-10 px-4">
        <span
          className="font-amiri block text-xl md:text-2xl font-bold mb-2"
          style={{ color: "#b45309" }}
        >
          {lang === "ar"
            ? "أهلاً بكم في الموقع  لفضيلة الشيخ"
            : lang === "en"
            ? "Welcome to the  Website of Sheikh"
            : "ወደ ሸይኽ  ድረ-ገጽ በደህና መጡ"}
        </span>
        <h1 className="font-amiri text-4xl md:text-6xl font-bold leading-tight">
          الشيخ محمد زين بن آدم
        </h1>
        <p
          className="font-bold mt-2 mb-6"
          style={{ color: "var(--primary)" }}
        >
          {lang === "ar" ? "حفظه الله ورعاه" : lang === "en" ? "May Allah Protect Him" : "አላህ ይጠብቃቸው"}
        </p>
        <p
          className="max-w-[750px] mx-auto leading-loose px-4"
          style={{ color: "var(--text-dim)" }}
        >
          {t.heroDesc}
        </p>

        <div className="max-w-[650px] mx-auto mt-6 px-3 relative">
          <i
            className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 text-lg"
            style={{
              color: "var(--primary)",
              [lang === "en" ? "left" : "right"]: "30px",
            }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full py-4 rounded-full outline-none border"
            style={{
              paddingInlineStart: "55px",
              paddingInlineEnd: "25px",
              background: "var(--bg-surface)",
              borderColor: "var(--border)",
              color: "var(--text-main)",
              boxShadow: "var(--shadow)",
            }}
          />
        </div>
      </section>

      <main className="w-[92%] max-w-[1150px] mx-auto pb-20">
        {searchActive ? (
          <>
            <SectionTitle icon="fa-solid fa-magnifying-glass" text={t.searchResults} />
            <p className="text-sm mb-6" style={{ color: "var(--text-dim)" }}>
              {results.length} {t.resultsFor} &ldquo;{q}&rdquo;
            </p>
            {results.length === 0 ? (
              <p
                className="text-center py-16 rounded-[20px] border"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-dim)",
                }}
              >
                {t.noResults}
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {results.map((r) => (
                  <Link
                    key={r.id}
                    href={r.href}
                    className="rounded-[20px] border p-5 flex items-center gap-4 no-underline"
                    style={{
                      background: "var(--bg-surface)",
                      borderColor: "var(--border)",
                      boxShadow: "var(--shadow)",
                      color: "var(--text-main)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${r.color}1a`, color: r.color }}
                    >
                      <i className={r.icon} />
                    </div>
                    <div className="min-w-0">
                      <span
                        className="text-xs font-bold block mb-0.5"
                        style={{ color: r.color }}
                      >
                        {r.section[lang]}
                      </span>
                      <h3 className="font-amiri font-bold text-base truncate">
                        {r.title[lang]}
                      </h3>
                      {r.subtitle && (
                        <p
                          className="text-sm truncate"
                          style={{ color: "var(--text-dim)" }}
                        >
                          {r.subtitle[lang]}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <SectionTitle icon="fa-solid fa-layer-group" text={t.secCategories} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-14">
              {categories.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-[24px] border p-6 flex items-center justify-between gap-4 no-underline"
                  style={{
                    background: "var(--bg-surface)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow)",
                    color: "var(--text-main)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-[55px] h-[55px] rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "rgba(13,148,136,0.08)", color: "var(--primary)" }}
                    >
                      <i className={c.icon} />
                    </div>
                    <div>
                      <h3 className="font-amiri text-lg font-bold mb-1">{c.title[lang]}</h3>
                      <p
                        className="text-sm line-clamp-2"
                        style={{ color: "var(--text-dim)" }}
                      >
                        {c.desc[lang]}
                      </p>
                    </div>
                  </div>
                  <i
                    className="fa-solid fa-arrow-left flex-shrink-0"
                    style={{ color: "var(--text-dim)" }}
                  />
                </Link>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <SectionTitle icon="fa-solid fa-book-open" text={t.secReadingNow} />
                {readingNow.map((b) => (
                  <BookRow key={b.href} book={b} lang={lang} badge={t.readingNow} badgeColor="#b45309" icon="fa-regular fa-play-circle" />
                ))}
              </div>
              <div>
                <SectionTitle icon="fa-solid fa-clock" text={t.secLatestAdded} />
                {latestAdded.map((b) => (
                  <BookRow key={b.href} book={b} lang={lang} badge={t.newBadge} badgeColor="var(--primary)" icon="fa-regular fa-file-audio" />
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      <footer
        className="text-center py-12 border-t mt-10"
        style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
      >
        <a
          href="https://t.me/SheikhMuhammedZainAdam"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border no-underline font-bold mb-5"
          style={{
            background: "var(--bg-surface)",
            borderColor: "var(--border)",
            color: "#0088cc",
            boxShadow: "var(--shadow)",
          }}
        >
          <i className="fa-brands fa-telegram" />
          <span>{t.telegram}</span>
        </a>
        <p className="text-sm">
          {lang === "ar"
            ? "جميع الحقوق محفوظة © 2026 | المنصة العلمية لفضيلة الشيخ محمد زين بن آدم"
            : lang === "en"
            ? "All Rights Reserved © 2026 | Scientific Platform of Sheikh Mohammed Zayn bin Adam"
            : "መብቱ በህግ የተጠበቀ ነው © 2026 | የሸይኽ መሐመድ ዘይን ቢን አደም መድረክ"}
        </p>
      </footer>
    </div>
  );
}

function SectionTitle({ icon, text }) {
  return (
    <div
      className="flex items-center gap-3 mt-10 mb-6 pb-2 border-b-2"
      style={{ borderColor: "var(--border)" }}
    >
      <h2 className="font-amiri text-xl font-bold flex items-center gap-2">
        <i className={icon} style={{ color: "var(--primary)" }} />
        {text}
      </h2>
    </div>
  );
}

function BookRow({ book, lang, badge, badgeColor, icon }) {
  return (
    <Link
      href={book.href}
      className="flex items-center justify-between gap-3 rounded-[20px] border p-5 mb-4 no-underline"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
        color: "var(--text-main)",
      }}
    >
      <div>
        <h3 className="font-amiri font-bold text-base mb-1">
          <span
            className="text-xs font-sans font-bold px-2.5 py-0.5 rounded-xl me-2"
            style={{ background: `${badgeColor}1a`, color: badgeColor }}
          >
            {badge}
          </span>
          {book.title[lang]}
        </h3>
        <p className="text-sm" style={{ color: "var(--text-dim)" }}>
          {book.desc[lang]}
        </p>
      </div>
      <i className={`${icon} text-2xl flex-shrink-0`} style={{ color: "var(--text-dim)" }} />
    </Link>
  );
}
