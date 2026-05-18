export default function Email() {
  return (
    <div className="hidden md:flex [@media(max-height:640px)]:hidden mx-4 lg:ml-6 lg:mr-12 relative">
      <div className="sticky right-0 top-[80px] h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center gap-5 text-[var(--text)]">
        <div aria-hidden="true" className="w-px h-15 bg-[var(--line)]"></div>
        <a
          href="mailto:hrushikesh.joshi.187@gmail.com"
          className="pl-1 [writing-mode:vertical-rl] tracking-widest text-[clamp(0.875rem,2.8vw+0.4rem,1rem)] transition-all duration-300 ease-in-out hover:text-[var(--primary)] hover:scale-105 transition-transform duration-300"
        >
          hrushikesh.joshi.187@gmail.com
        </a>
        <div aria-hidden="true" className="w-px h-15 bg-[var(--line)] mb-20"></div>
      </div>
    </div>
  );
}
