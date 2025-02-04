import { useState } from "react";

import Navigation from "./Navigation.tsx";

import logo from "../assets/logos/hrushikesh_joshi_logo_dark.svg";

import "./Header.css";

const Header = (): JSX.Element => {
  const [navigationOpened, SetNavigationOpened] = useState<boolean>(false);

  return (
    <header className="header_section">
      <div className="header_container">
        <a href="/" className="">
          <img
            className="header_hrushi_joshi_logo_dark"
            src={logo}
            alt="logo"
          />
        </a>

        <div className="header_menu_close_button_div">
          <button
            className="header_menu_close_button"
            onClick={() => {
              SetNavigationOpened((navigationOpened) => !navigationOpened);
            }}
          >
            <span className="header_material_symbols_rounded">
              {navigationOpened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="none"
                >
                  <path
                    d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="none"
                >
                  <path
                    d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </span>
          </button>
          <Navigation navigationOpened={navigationOpened} />
        </div>

        <a
          href="/#contact_section"
          className="header_contact_button header_button header_secondary_button "
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
