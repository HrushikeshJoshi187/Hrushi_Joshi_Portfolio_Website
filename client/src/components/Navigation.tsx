import { useRef, useEffect } from "react";

import "./Navigation.css";

interface NavigationProps {
  navigationOpened: boolean;
}

export default function Navigation({ navigationOpened }: NavigationProps) {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (lastActiveLink.current && activeBox.current) {
      lastActiveLink.current.classList.remove("active");
      event.currentTarget.classList.add("active");
      lastActiveLink.current = event.currentTarget;
      initActiveBox();
    }
  };

  useEffect(() => {
    initActiveBox();
  }, []);

  window.addEventListener("resize", initActiveBox);

  const navItems = [
    {
      label: "Home",
      link: "#hero_section",
      className: "navigation_link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about_section",
      className: "navigation_link",
    },
    {
      label: "Work",
      link: "#work_section",
      className: "navigation_link",
    },
    {
      label: "Reviews",
      link: "#reviews_section",
      className: "navigation_link",
    },
    {
      label: "Contact",
      link: "#contact_section",
      className: "navigation_link md:hidden",
    },
  ];

  return (
    <nav className={"navigation " + (navigationOpened ? " active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active_box" ref={activeBox}></div>
    </nav>
  );
}
