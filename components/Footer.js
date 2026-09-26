"use client";

import { useLanguage } from "@/context/LanguageContext";
import { common } from "@/data/common";

export default function Footer({ extra }) {
  const { lang } = useLanguage();
  const t = common[lang];
  return (
    <footer
      className="text-center py-10 mt-16 border-t"
      style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
    >
      <div className="w-[92%] max-w-[1000px] mx-auto">
        {extra && (
          <p className="text-sm mb-3 max-w-[700px] mx-auto leading-relaxed">{extra}</p>
        )}
        <p className="text-sm font-bold" style={{ color: "var(--text-main)" }}>
          &copy; 2026 | {t.rights}
        </p>
      </div>
    </footer>
  );
}
