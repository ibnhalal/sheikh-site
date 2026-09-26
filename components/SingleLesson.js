"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { common } from "@/data/common";
import { getLesson, getLessonCount, formatLessonLabel } from "@/lib/lessons";
import SectionHeader from "./SectionHeader";
import TelegramCard from "./TelegramCard";
import CopyLinkButton from "./CopyLinkButton";
import Footer from "./Footer";
import ComingSoon from "./ComingSoon";


export default function SingleLesson({ book, lessonIdParam, basePath, indexLabel, color, telegram }) {
  const { lang } = useLanguage();
  const t = common[lang];

  if (!book) return null;
  if (book.comingSoon) return <ComingSoon backHref={basePath} color={color} />;

  const lesson = getLesson(book, lessonIdParam);
  const count = getLessonCount(book);
  const title = book.fullTitle?.[lang] || book.title[lang];

  if (!lesson) {
    return (
      <div style={{ "--primary": color }}>
        <SectionHeader backHref={basePath} backLabel={indexLabel} color={color} />
        <div className="w-[92%] max-w-[700px] mx-auto text-center py-20">
          <p style={{ color: "var(--text-dim)" }}>
            {lang === "ar"
              ? "هذا الدرس غير موجود."
              : lang === "en"
              ? "This lesson does not exist."
              : "ይህ ትምህርት አልተገኘም።"}
          </p>
          <Link href={basePath} className="font-bold underline mt-3 inline-block" style={{ color }}>
            {indexLabel[lang]}
          </Link>
        </div>
      </div>
    );
  }

  const label = formatLessonLabel(book, lesson.id);
  const prevId = lesson.id > 1 ? lesson.id - 1 : null;
  const nextId = lesson.id < count ? lesson.id + 1 : null;

  return (
    <div style={{ "--primary": color }}>
      <SectionHeader backHref={basePath} backLabel={indexLabel} color={color} />

      <div className="w-[92%] max-w-[700px] mx-auto">
        <div className="text-center py-8">
          <h1 className="font-amiri text-2xl md:text-3xl font-bold" style={{ color }}>
            {title}
          </h1>
          <p className="mt-2 text-lg font-bold" style={{ color: "var(--text-dim)" }}>
            {t.lesson} ({label})
          </p>
        </div>

        <div
          className="rounded-[20px] border p-6 mb-6"
          style={{
            background: "var(--bg-surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
         <audio controls autoPlay preload="metadata" className="w-full">
  <source src={lesson.src} type="audio/mpeg" />
  متصفحك لا يدعم تشغيل الصوتيات.
            </audio>
          <div className="flex items-center justify-between gap-3 mt-6 flex-wrap">
            {prevId ? (
              <Link
                href={`${basePath}/${prevId}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-sm no-underline"
                style={{ borderColor: "var(--border)", color: "var(--text-main)" }}
              >
                <i className={lang === "en" ? "fa-solid fa-chevron-left" : "fa-solid fa-chevron-right"} />
                {t.lesson} {formatLessonLabel(book, prevId)}
              </Link>
            ) : (
              <span />
            )}

            <CopyLinkButton color={color} />

            {nextId ? (
              <Link
                href={`${basePath}/${nextId}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-sm no-underline"
                style={{ borderColor: "var(--border)", color: "var(--text-main)" }}
              >
                {t.lesson} {formatLessonLabel(book, nextId)}
                <i className={lang === "en" ? "fa-solid fa-chevron-right" : "fa-solid fa-chevron-left"} />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>

        <TelegramCard href={telegram} color={color} />
      </div>

      <Footer extra={book.footerDesc?.[lang]} />
    </div>
  );
}
