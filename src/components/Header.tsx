import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="absolute z-10 w-full h-25 flex items-center justify-between px-4 sm:px-8 lg:px-12">
      <Logo />
      <Navigation />
    </header>
  );
}
