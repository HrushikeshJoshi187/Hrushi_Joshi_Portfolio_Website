import { useTheme } from "../context/ThemeContext.tsx";

export default function SectionHeader({ number, title }: { number: string; title: string }) {
  const { theme } = useTheme();
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <span
        className={`text-[var(--primary)] text-[clamp(1.6rem,4.8vw+0.8rem,1.5rem)] font-mono mb-4 ${theme === "dark" ? "" : "font-bold"}`}
      >
        {number}
      </span>
      <h2 className="text-text text-[clamp(1.6rem,4.8vw+0.8rem,2rem)] font-semibold mb-4">{title}</h2>
      <div className=" flex-1 h-px bg-[var(--line)] mb-4"></div>
    </div>
  );
}
