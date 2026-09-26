"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="toggle theme"
      className="cursor-pointer text-lg p-1.5 rounded-lg hover:opacity-75 transition"
      style={{ color: "var(--text-main)" }}
    >
      <i className={dark ? "fa-solid fa-sun" : "fa-regular fa-lightbulb"} />
    </button>
  );
}
