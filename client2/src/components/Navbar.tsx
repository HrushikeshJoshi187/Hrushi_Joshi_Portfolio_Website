import { useRef, useEffect, useState } from "react";

interface NavbarProps {
  navOpen: boolean;
}

export default function Navbar({ navOpen }: NavbarProps) {
  const [lastActiveLink, setLastActiveLink] =
    useState<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement>(null);

  const initActiveBox = () => {
    if (lastActiveLink && activeBox.current) {
      console.log(lastActiveLink);
      console.log(activeBox.current);
      activeBox.current.style.top = lastActiveLink.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (lastActiveLink && activeBox.current) {
      lastActiveLink.classList.remove("active");
      event.currentTarget.classList.add("active");
      setLastActiveLink(event.currentTarget);
      initActiveBox();
    }
  };

  useEffect(() => {
    initActiveBox();
  }, []);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={() => {
            activeCurrentLink();
          }}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}
