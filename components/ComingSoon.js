"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { common } from "@/data/common";
import LangSwitcher from "./LangSwitcher";

export default function ComingSoon({ backHref = "/", color = "#0d9488" }) {
  const { lang } = useLanguage();
  const t = common[lang];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-5"
      style={{ background: "var(--bg-body)" }}
    >
      <div className="mb-5">
        <LangSwitcher activeColor={color} />
      </div>
      <div
        className="rounded-[24px] p-10 text-center max-w-[500px] w-full border"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
          style={{ background: `${color}1a`, color }}
        >
          <i className="fa-solid fa-hourglass-half" />
        </div>
        <h1 className="font-amiri text-3xl font-bold mb-3" style={{ color }}>
          {t.comingSoonTitle}
        </h1>
        <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {t.comingSoonDesc}
        </p>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold no-underline mb-6"
          style={{ background: color }}
        >
          <i
            className={
              lang === "en" ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"
            }
          />
          <span>{t.comingSoonBack}</span>
        </Link>
        <div className="h-px my-2" style={{ background: "var(--border)" }} />
        <div className="rounded-2xl p-5 mt-4 bg-[#0088cc0a] border border-[#0088cc26]">
          <div className="text-[#0088cc] text-2xl mb-2">
            <i className="fa-brands fa-telegram" />
          </div>
          <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-main)" }}>
            {t.tgTitle}
          </h3>
          <p className="text-xs mb-3" style={{ color: "var(--text-dim)" }}>
            {t.tgSub}
          </p>
          <a
            href="https://t.me/SheikhMuhammedZainAdam"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-2 rounded-full text-white text-sm font-bold no-underline"
            style={{ background: "#0088cc" }}
          >
            {t.tgJoin}
          </a>
        </div>
      </div>
    </div>
  );
}
