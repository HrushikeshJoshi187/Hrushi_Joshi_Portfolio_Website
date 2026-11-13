import SectionHeader from "../components/SectionHeader.tsx";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader title="Get In Touch" />

      <div className="w-full flex flex-col items-center text-center mt-10">
        <p className="text-[var(--text)] font-bold leading-tight text-[clamp(1.6rem,4.8vw+0.8rem,3.2rem)] tracking-tight mb-4">
          Let's Bring Ideas to Life !
        </p>
        <p className="text-[var(--text-muted)] mb-10 lg:mx-20">
          Great opportunities often start with a simple conversation. Have an idea, a project, or an opportunity to
          collaborate? I'd love to hear from you! Let's create meaningful experiences and bring great ideas to life!
        </p>

        <a
          href="mailto:hrushikesh.joshi.187@gmail.com"
          className="inline-flex items-center gap-2 border-2 border-[var(--primary)] px-6 py-3 rounded-md text-[var(--primary)] transition-all duration-300 hover:text-[var(--text)] hover:border-[var(--text)]"
        >
          Say Hello <span>→</span>
        </a>

        <p className="mt-10">
          or email me directly at
          <br />
          <a href="mailto:hrushikesh.joshi.187@gmail.com" className="text-[var(--primary)] hover:underline">
            hrushikesh.joshi.187@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
