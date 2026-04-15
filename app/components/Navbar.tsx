"use client";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(10, 10, 15, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #2a2a3a",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #a855f7, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Srikesh.dev
        </span>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: "32px", alignItems: "center" }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn-primary"
            style={{ padding: "8px 18px", fontSize: "0.85rem" }}
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "#e2e8f0",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          className="md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#13131a",
            borderTop: "1px solid #2a2a3a",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" download className="btn-primary" style={{ textAlign: "center" }}>
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
