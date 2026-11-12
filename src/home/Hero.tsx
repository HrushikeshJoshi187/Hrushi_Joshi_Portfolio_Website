import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="w-full min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl flex flex-col justify-center gap-2 md:gap-4 overflow-hidden break-normal">
      <p
        className={`font-semibold ${theme === "dark" ? "text-[var(--primary)]" : "text-[var(--text)]"} text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] tracking-wide font-bold`}
      >
        Hi, my name is
      </p>

      <h1
        className={`font-bold leading-[0.92] ${theme === "dark" ? "text-[var(--text)]" : "text-[var(--primary)]"} text-[clamp(2.8rem,8.5vw+1rem,5.5rem)] tracking-tight`}
      >
        Hrushikesh Joshi.
      </h1>

      <h2 className="text-[var(--text-muted)] font-semibold leading-tight text-[clamp(1.6rem,4.8vw+0.8rem,3.2rem)] tracking-tight mb-20">
        Creating exceptional experiences.
      </h2>
    </section>
  );
}
