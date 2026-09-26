"use client";

import { useLanguage } from "@/context/LanguageContext";
import { common } from "@/data/common";

export default function TelegramCard({ href, color }) {
  const { lang } = useLanguage();
  const t = common[lang];
  return (
    <div
      className="rounded-[25px] border text-center p-6 my-8"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="w-[60px] h-[60px] rounded-2xl bg-[#0088cc] text-white flex items-center justify-center mx-auto mb-4 text-3xl">
        <i className="fa-brands fa-telegram" />
      </div>
      <h3 className="font-bold text-lg" style={{ color: "var(--text-main)" }}>
        {t.tgTitle}
      </h3>
      <p className="text-sm mt-1" style={{ color: "var(--text-dim)" }}>
        {t.tgSub}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 px-9 py-2.5 rounded-full text-white font-bold no-underline"
        style={{ background: "#0088cc" }}
      >
        {t.tgJoin}
      </a>
    </div>
  );
}
