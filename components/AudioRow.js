"use client";

export default function AudioRow({ label, src }) {
  return (
    <div
      className="flex items-center justify-between gap-4 py-3 border-b last:border-b-0"
      style={{ borderColor: "var(--border)" }}
    >
      <span
        className="text-sm font-bold min-w-[80px]"
        style={{ color: "var(--primary)" }}
      >
        {label}
      </span>
      <audio controls preload="none" className="flex-grow">
        <source src={src} type="audio/mpeg" />
        متصفحك لا يدعم تشغيل الصوتيات.
      </audio>
    </div>
  );
}
