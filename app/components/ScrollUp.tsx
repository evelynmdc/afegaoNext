"use client";

export function ScrollUp({ children }: any) {
  return (
    <div
      style={{
        width: "20px",
        zIndex: 2,
        position: "fixed",
        bottom: "60px",
        right: "100px",
      }}
      onClick={function () {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </div>
  );
}
