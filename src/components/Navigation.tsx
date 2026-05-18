import { useState } from "react";
import { Link, useLocation, type Location } from "react-router-dom";

import { useTheme, type Theme } from "../context/ThemeContext.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
];

const renderNavLinks = ({
  mobile = false,
  theme,
  location,
  setOpen,
}: {
  mobile?: boolean;
  theme: Theme;
  location: Location;
  setOpen: (open: boolean) => void;
}) =>
  navItems.map((item) => (
    <li key={item.id}>
      <Link
        to={`/${item.id === "home" ? "" : item.id}`}
        className={`relative inline-block origin-center hover:text-[var(--primary)] hover:scale-105 transition-all duration-300 ease-in-out
          after:content-['']
          after:absolute
          after:left-1/2
          after:bottom-0
          after:h-[2px]
          after:bg-[var(--primary)]
          after:transition-all
          after:duration-300
          after:ease-in-out
          after:-translate-x-1/2

          ${theme === "dark" ? "" : ""}

          ${
            location.pathname === `/${item.id === "home" ? "" : item.id}`
              ? "text-[var(--primary)] after:w-full"
              : "text-[var(--text)] after:w-0 hover:after:w-full"
          }

          ${mobile ? "flex-1 text-center" : ""}
        `}
        onClick={() => setOpen(false)}
      >
        {item.label}
      </Link>
    </li>
  ));

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-end">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--link)]">
          {renderNavLinks({ mobile: false, theme, location, setOpen })}

          <li>
            <Link
              to="/resume/Hrushikesh_Joshi_s_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="border-2 border-[var(--primary)] p-2 rounded-md text-[var(--primary)] hover:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
            >
              Resume
            </Link>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Hamburger */}
        <button className="lg:hidden relative z-100 w-6 h-6" onClick={() => setOpen(!open)}>
          <span
            className={`absolute left-0 w-6 h-0.5 bg-[var(--text)] transition-all duration-300 top-1/2 -translate-y-1/2 ${open ? "rotate-45" : "-translate-y-2.5"}`}
          />

          <span
            className={`absolute left-0 w-6 h-0.5 bg-[var(--text)] transition-all duration-300 top-1/2 -translate-y-1/2 ${open ? "opacity-0" : "opacity-100"}`}
          />

          <span
            className={`absolute left-0 w-6 h-0.5 bg-[var(--text)] transition-all duration-300 top-1/2 -translate-y-1/2 ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 lg:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[var(--background)] p-12 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="w-full h-full flex flex-col items-center justify-center gap-10 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--text-muted)] text-center">
          {renderNavLinks({ mobile: true, theme, location, setOpen })}

          <li>
            <Link
              to="/resume/Hrushikesh_Joshi_s_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="border-2 border-[var(--primary)] p-2 rounded-md text-[var(--primary)] hover:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
            >
              Resume
            </Link>
          </li>

          <li>
            <ThemeToggle />
          </li>

          <li className="min-w-0">
            <a
              href="mailto:hrushikesh.joshi.187@gmail.com"
              className="inline-block origin-center text-[var(--text)] hover:text-[var(--primary)] text-[clamp(0.875rem,2.8vw+0.4rem,1rem)] transition-all duration-300 ease-in-out hover:text-[var(--primary)] hover:scale-105 transition-transform duration-300 font-semibold"
            >
              hrushikesh.joshi.187@gmail.com
            </a>
          </li>

          <li className="w-full h-px flex gap-5 items-center justify-center mt-3 text-[var(--text)]">
            <a
              href="https://github.com/HrushikeshJoshi187"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-all duration-300 ease-in-out hover:text-button-hover hover:text-[var(--primary)]"
            >
              <svg
                className="w-6 h-6 fill-current hover:scale-125 transition-transform duration-300"
                viewBox="0 0 98 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_730_27126)">
                  <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" />
                </g>
                <defs>
                  <clipPath id="clip0_730_27126">
                    <rect width="98" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/hrushikeshjoshi187"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-all duration-300 ease-in-out hover:color-button-hover hover:text-[var(--primary)]"
            >
              <svg
                className="w-6.5 h-6.5 fill-current hover:scale-125 transition-transform duration-300"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM8.078,18.737H5.085v-9H8.078ZM6.582,8.5h-.02A1.56,1.56,0,1,1,6.6,5.393,1.56,1.56,0,1,1,6.582,8.5ZM18.87,18.737H15.877V13.921c0-1.211-.433-2.036-1.516-2.036a1.637,1.637,0,0,0-1.535,1.094,2.032,2.032,0,0,0-.1.731v5.027H9.734s.04-8.16,0-9h2.992V11.01a2.97,2.97,0,0,1,2.7-1.488c1.969,0,3.446,1.287,3.446,4.053Z"></path>
                </g>
              </svg>
            </a>

            {/* Codepen */}
            <a
              href="https://codepen.io/hrushiJoshi187"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-all duration-300 ease-in-out hover:color-button-hover hover:text-[var(--primary)]"
            >
              <svg
                className="w-6 h-6 fill-current hover:scale-125 transition-transform duration-300"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.4265 1.18077C11.7709 0.939744 12.2291 0.939744 12.5735 1.18077L22.5735 8.18077C22.8408 8.3679 23 8.67369 23 9V16C23 16.3263 22.8408 16.6321 22.5735 16.8192L12.5735 23.8192C12.2291 24.0603 11.7709 24.0603 11.4265 23.8192L1.42654 16.8192C1.15921 16.6321 1 16.3263 1 16V9C1 8.67369 1.15921 8.3679 1.42654 8.18077L11.4265 1.18077ZM3 10.9207V14.0793L5.25621 12.5L3 10.9207ZM7 13.7207L3.74379 16L11 21.0793V16.5207L7 13.7207ZM13 16.5207V21.0793L20.2562 16L17 13.7207L13 16.5207ZM18.7438 12.5L21 14.0793V10.9207L18.7438 12.5ZM20.2562 9L17 11.2793L13 8.47934V3.92066L20.2562 9ZM11 3.92066V8.47934L7 11.2793L3.74379 9L11 3.92066ZM12 10.2207L8.74379 12.5L12 14.7793L15.2562 12.5L12 10.2207Z"
                  ></path>
                </g>
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/Hrushikesh86361"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-all duration-300 ease-in-out hover:color-button-hover hover:text-[var(--primary)]"
            >
              <svg
                className="w-5.5 h-5.5 fill-current hover:scale-125 transition-transform duration-300"
                viewBox="0 0 1200 1227"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hrushikesh_joshi_187/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-all duration-300 ease-in-out hover:color-button-hover hover:text-[var(--primary)]"
            >
              <svg
                className="w-6 h-6 fill-current hover:scale-125 transition-transform duration-300"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
              >
                <path
                  d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
                  transform="translate(-2.5 -2.5)"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
