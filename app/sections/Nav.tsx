"use client";

import logo from "../images/download.jpg";
import Link from "next/link";
import Image from "next/image";

type TMenuItem = { name: string; id: string };
type TMenuItems = { menuItems: Array<TMenuItem> };

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById("nav");
  const menu = document.getElementById("menu");
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");
    if (active) {
      nav.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    } else {
      nav.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar Menu");
    }
  }
}

export const Nav = ({ menuItems }: TMenuItems) => {
  if (typeof window !== "undefined") {
    const btnMobile = document.getElementById("btn-mobile");
    btnMobile?.addEventListener("pointerdown", toggleMenu);
  }

  return (
    <nav
      id="nav"
      style={{
        width: "100%",
        height: "5vh",
        zIndex: "10",
        color: "#fff",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        backgroundColor: " #f5dea3",
        borderBottom: "1px solid #c4a75e",
        boxShadow: "0 1px 3px #c4a75e",
        boxSizing: "content-box",
        display: "flex",
      }}
    >
      <div
        style={{
          margin: "5px auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
        }}
      >
        <div
          style={{
            width: "5vh",
          }}
        >
          <a href={`../`}>
            <Image alt="logo" src={logo.src} width={120} height={120} />
          </a>
        </div>
        <button
          aria-label="Abrir Menu"
          aria-expanded="false"
          aria-haspopup="true"
          aria-controls="menu"
          id="btn-mobile"
        >
          <span id="hamburger"></span>
        </button>

        <ul id="menu" className="lista">
          {menuItems.map((item: TMenuItem) => {
            return (
              <li
                key={item.name}
                style={{
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                <Link
                  href={`#${item.id}`}
                  style={{
                    display: "inline-block",
                    padding: "1.5rem",
                    fontSize: "18px",
                    letterSpacing: "1px",
                    textDecoration: "none",
                    color: "#2f5579",
                    fontWeight: 600,
                    margin: "0 auto",
                  }}
                  className="link"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
