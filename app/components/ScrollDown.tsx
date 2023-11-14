"use client";

export function ScrollDown({ children }) {
  return (
    <div
      style={{
        width: "20px",
        zIndex: 2,
        position: "fixed",
        bottom: "60px",
        right: "60px",
      }}
      onClick={function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </div>
  );
}
