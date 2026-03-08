import Navigation from "./Navigation";

import logoLight from "/hrushikesh_joshi_logo_light.svg";
// import logoDark from "/hrushikesh_joshi_logo_dark.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={logoLight} alt="Hrushi Joshi" className="h-10 w-auto" />

      {/* <img src={logoDark} alt="Hrushi Joshi" className="hidden h-10 w-auto dark:block" /> */}
      <Navigation />
    </header>
  );
}
