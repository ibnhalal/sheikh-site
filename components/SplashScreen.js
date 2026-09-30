"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const LOADING_TEXT = { ar: "جاري التحميل", en: "Loading", am: "በመጫን ላይ" };

export default function SplashScreen() {
  const { lang } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (doneRef.current) return p;
        const next = Math.min(100, p + Math.floor(Math.random() * 8) + 5);
        if (next >= 100) {
          doneRef.current = true;
          clearInterval(interval);
          setTimeout(() => setHidden(true), 350);
        }
        return next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="splash-screen"
      style={{
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <div>
        <span className="font-amiri text-[clamp(1.2rem,4vw,1.6rem)] text-teal-400 block tracking-wide">
          {lang === "ar"
            ? "أهلاً بكم في الموقع الرسمي لفضيلة الشيخ"
            : lang === "en"
            ? "Welcome to the Official Website of Sheikh"
            : "ወደ ሸይኽ ይፋዊ ድረ-ገጽ በደህና መጡ"}
        </span>
        <span className="font-amiri text-[clamp(2rem,8vw,3.5rem)] font-bold block my-2 bg-gradient-to-l from-white to-teal-400 bg-clip-text text-transparent">
          {lang === "ar"
            ? "الشيخ محمد زين بن آدم"
            : lang === "en"
            ? "Sheikh  Muhammedzain Adam"
            : "ሸይኽ ሙሀመድዘይን አደም"}
        </span>
        <span className="font-amiri text-lg opacity-80">
          {lang === "ar"
            ? "حفظه الله ورعاه"
            : lang === "en"
            ? "May Allah Protect Him"
            : "አላህ ይጠብቃቸው"}
        </span>
        <div className="progress-container mx-auto">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 text-sm text-white/60 font-bold tracking-wide" dir="ltr">
          {LOADING_TEXT[lang]} {progress}%
        </div>
      </div>
    </div>
  );
}
