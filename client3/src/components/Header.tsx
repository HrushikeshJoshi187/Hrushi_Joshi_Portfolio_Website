import { useState } from "react";

import Navigation from "./Navigation";

import "./Header.css";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";

export default function Header() {
  const [navigationOpened, SetNavigationOpened] = useState<boolean>(false);

  return (
    <header className="header">
      <a href="/" className="logo">
        <img
          src="./src/assets/logos/hrushikesh_joshi_logo_dark.svg"
          alt="logo"
          className="hrushi_joshi_logo_dark"
        />
      </a>

      <div className="relative md:justify-self-center">
        <button
          className="menu_close_button menu-btn md:hidden"
          onClick={() => {
            SetNavigationOpened((navigationOpened) => !navigationOpened);
          }}
        >
          <span className="material_symbols_rounded">
            {navigationOpened ? (
              <img src={menu} alt="menu" />
            ) : (
              <img src={close} alt="close" />
            )}
          </span>
        </button>
        <Navigation navigationOpened={navigationOpened} />
      </div>

      <a href="#contact" className="contact_me_button button secondary_button ">
        Contact Me
      </a>
    </header>
  );
}
