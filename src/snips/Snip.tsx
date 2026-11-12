export default function Snip({ text, className = "" }: { text: string; className?: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`
        inline text-left whitespace-pre-wrap break-words
        rounded px-1 -mx-1 cursor-copy
        transition-colors duration-200
        hover:bg-[var(--primary)]/10
        hover:text-[var(--primary)]
        ${className}
      `}
    >
      {text}
    </button>
  );
}
