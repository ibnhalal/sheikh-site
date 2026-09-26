"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LangSwitcher({ activeColor }) {
  const { lang, setLang } = useLanguage();
  const langs = [
    { code: "ar", label: "AR" },
    { code: "en", label: "EN" },
    { code: "am", label: "AM" },
  ];

  return (
    <div className="flex gap-1.5">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className="px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors"
          style={
            lang === l.code
              ? {
                  background: activeColor || "var(--primary)",
                  color: "#fff",
                  borderColor: activeColor || "var(--primary)",
                }
              : {
                  background: "var(--bg-surface)",
                  color: "var(--text-main)",
                  borderColor: "var(--border)",
                }
          }
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
