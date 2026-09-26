"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("ar");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("selectedLang");
    if (saved) setLangState(saved);
  }, []);

  useEffect(() => {
    const dir = lang === "en" ? "ltr" : "rtl";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLang", lang);
    }
  }, [lang]);

  const setLang = (l) => setLangState(l);
  const dir = lang === "en" ? "ltr" : "rtl";

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
