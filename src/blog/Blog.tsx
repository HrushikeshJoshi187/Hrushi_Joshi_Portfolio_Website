export default function Blog() {
  return (
    <>
      <main className="w-full h-full">
        <section
          id="blog"
          className="w-full min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl flex flex-col justify-center gap-2 md:gap-4 overflow-hidden break-normal"
        >
          <p className="text-[var(--text-muted)] mb-20 text-center">
            Work in progress... Check back later for updates!
          </p>
        </section>
      </main>
    </>
  );
}
