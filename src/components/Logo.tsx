import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="text-[var(--text)] text-[40px] font-extrabold italic">
      <Link
        to="/"
        className="inline-block origin-center hover:text-[var(--primary)] hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Hj
      </Link>
    </div>
  );
}
