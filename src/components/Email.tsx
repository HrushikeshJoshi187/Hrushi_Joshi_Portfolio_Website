export default function Email() {
  return (
    <div className="hidden md:flex [@media(max-height:400px)]:hidden px-4 lg:pl-6 lg:pr-12 relative">
      <div className="sticky right-0 top-[100px] h-[calc(100vh-100px)] w-full flex flex-col items-center justify-end gap-6">
        <a
          href="mailto:hrushikesh.joshi.187@gmail.com"
          className="hover:text-sky-300 [writing-mode:vertical-rl] tracking-widest text-sm transition-colors duration-300 ease-in-out"
        >
          hrushikesh.joshi.187@gmail.com
        </a>

        <div className="w-px h-50 bg-zinc-400"></div>
      </div>
    </div>
  );
}
