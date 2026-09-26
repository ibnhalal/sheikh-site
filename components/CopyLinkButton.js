"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const labels = {
  ar: { copy: "نسخ الرابط", copied: "تم النسخ!" },
  en: { copy: "Copy Link", copied: "Copied!" },
  am: { copy: "ሊንኩን ቅዳ", copied: "ተቀድቷል!" },
};

export default function CopyLinkButton({ color }) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const t = labels[lang];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 font-bold text-sm transition"
      style={{ borderColor: color, color: copied ? "#fff" : color, background: copied ? color : "transparent" }}
    >
      <i className={copied ? "fa-solid fa-check" : "fa-solid fa-link"} />
      <span>{copied ? t.copied : t.copy}</span>
    </button>
  );
}
