export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <h2 className="text-[var(--text)] text-[clamp(1.6rem,4.8vw+0.8rem,2rem)] font-semibold mb-4">{title}</h2>
      <div className=" flex-1 h-px bg-[var(--line)] mb-4"></div>
    </div>
  );
}
