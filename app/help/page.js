"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LangSwitcher from "@/components/LangSwitcher";

const text = {
  ar: {
  mainTitle: "الإبلاغ عن الأخطاء ",
  subTitle: " جميع الأخطاء",
  labelMsg: " إبلاغ عن الأخطاء  :",
  phMsg: "اكتب الأخطاء هنا...",
  chooseMethod: "اختر طريقة الإرسال المناسبة لك:",
  btnTg: "تيليجرام",
  btnMail: "إيميل",
  backLink: "العودة للموقع الرئيسي",
  alertFill: "يرجى ملء الرسالة أولاً",
},
  en: {
    mainTitle: "Error Reporting",
    subTitle: "write your Issue Description",
    labelMsg: "Bug Description:",
    phMsg: "Write your Issue Description here...",
    chooseMethod: "Choose your preferred sending method:",
    btnTg: "Telegram",
    btnMail: "Email",
    backLink: "Back to Main Website",
    alertFill: "Please fill  your message first",
  },
  am: {
    mainTitle: "የ ስህተቶች ሪፖርት ማድረጊያ ክፍል",
    subTitle: "ስህተቶች",
    labelMsg: "ስህተቶች:",
    phMsg: "የስህተቶችን ሪፖርት እዚህ ይጻፉ...",
    chooseMethod: "የሚፈልጉትን የመላኪያ ዘዴ ይምረጡ:",
    btnTg: "ቴሌግራም",
    btnMail: "ኢሜይል",
    backLink: "ወደ ዋናው ድህረ ገጽ ተመለስ",
    alertFill: "እባክዎ መልእክትዎን ይሙሉ",
  },
};

const TELEGRAM_USERNAME = "sahar1431";
const CONTACT_EMAIL = "ibnhalal1413@gmail.com";

export default function HelpPage() {
  const { lang } = useLanguage();
  const t = text[lang];
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    if (!name.trim() || !message.trim()) {
      alert(t.alertFill);
      return false;
    }
    return true;
  };

  const sendTelegram = () => {
    if (!validate()) return;
    const body = `السلام عليكم،  ${name}\n\nالرسالة:\n${message}`;
    window.open(
      `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `Inquiry from: ${name}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-5"
      style={{ background: "var(--bg-body)" }}
    >
      <div
        className="max-w-[500px] w-full rounded-xl p-6 text-center border"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <div className="flex justify-center gap-2 mb-5">
          <LangSwitcher activeColor="#16a085" />
        </div>

        <i className="fa-solid fa-headset text-5xl mb-4" style={{ color: "#16a085" }} />
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-main)" }}>
          {t.mainTitle}
        </h2>
        <p className="text-sm opacity-80 mb-5" style={{ color: "var(--text-dim)" }}>
          {t.subTitle}
        </p>

        <form
          className="text-start space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block mb-1.5 font-bold text-sm" style={{ color: "var(--text-main)" }}>
              {t.labelName}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.phName}
              className="w-full p-2.5 rounded-lg border"
              style={{ borderColor: "var(--border)", background: "var(--bg-body)", color: "var(--text-main)" }}
            />
          </div>
          <div>
            <label className="block mb-1.5 font-bold text-sm" style={{ color: "var(--text-main)" }}>
              {t.labelMsg}
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.phMsg}
              className="w-full p-2.5 rounded-lg border"
              style={{ borderColor: "var(--border)", background: "var(--bg-body)", color: "var(--text-main)" }}
            />
          </div>

          <p className="text-xs" style={{ color: "var(--text-dim)" }}>
            {t.chooseMethod}
          </p>

          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={sendTelegram}
              className="flex-1 py-3 rounded-lg text-white font-bold flex items-center justify-center gap-2"
              style={{ background: "#0088cc" }}
            >
              <i className="fa-brands fa-telegram" /> {t.btnTg}
            </button>
            <button
              type="button"
              onClick={sendEmail}
              className="flex-1 py-3 rounded-lg text-white font-bold flex items-center justify-center gap-2"
              style={{ background: "#ea4335" }}
            >
              <i className="fa-solid fa-envelope" /> {t.btnMail}
            </button>
          </div>
        </form>

        <Link
          href="/"
          className="inline-block mt-5 font-bold no-underline"
          style={{ color: "var(--primary)" }}
        >
          <i className={lang === "ar" ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-left"} />{" "}
          {t.backLink}
        </Link>
      </div>
    </div>
  );
}
