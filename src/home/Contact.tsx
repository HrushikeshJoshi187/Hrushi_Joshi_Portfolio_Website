import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader number="05." title="Get In Touch" />

      <div className="w-full flex flex-col items-center text-center mt-4">
        <h2 className="text-text text-[clamp(1.6rem,4.8vw+0.8rem,2rem)] font-semibold mb-4">
          I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want
          to say hi, I’ll try my best to get back to you!
        </h2>
        <a
          href="mailto:your-email@example.com"
          className="text-[var(--primary)] hover:text-[var(--primary-hover)] underline"
        >
          your-email@example.com
        </a>
      </div>
    </section>
  );
}
