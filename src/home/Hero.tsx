export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-100px)] px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl flex flex-col justify-center gap-2 mt-[100px]">
      <p className="text-xl sm:text-2xl text-sky-300 font-semibold">Hi, My name is</p>
      <h1 className="font-bold leading-tight text-[clamp(3rem,10vw,6rem)]">Hrushikesh Joshi.</h1>
      <h2 className="text-zinc-300/80 font-bold leading-tight text-[clamp(1.5rem,5vw,3rem)]">Creating exceptional experiences.</h2>
    </section>
  );
}
