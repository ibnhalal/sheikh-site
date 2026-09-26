"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LangSwitcher from "./LangSwitcher";
import ThemeToggle from "./ThemeToggle";
import { common } from "@/data/common";

export default function SectionHeader({ backHref = "/", backLabel, color }) {
  const { lang } = useLanguage();
  const label = backLabel?.[lang] || common[lang].backHome;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b py-2.5"
      style={{ background: "var(--header-bg, var(--bg-surface))", borderColor: "var(--border)" }}
    >
      <div className="w-[92%] max-w-[1000px] mx-auto flex items-center justify-between gap-3 flex-wrap">
        <Link
          href={backHref}
          className="flex items-center gap-2 font-bold no-underline"
          style={{ color: color || "var(--primary)" }}
        >
          <i
            className={
              lang === "en" ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"
            }
          />
          <span>{label}</span>
        </Link>
        <div className="flex items-center gap-3">
          <LangSwitcher activeColor={color} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
