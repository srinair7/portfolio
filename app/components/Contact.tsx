"use client";
import { motion } from "framer-motion";

const contacts = [
  { label: "Email", value: "srikesh_2000@live.com", href: "mailto:srikesh_2000@live.com", icon: "✉️" },
  { label: "LinkedIn", value: "linkedin.com/in/srikesh-nair-b54646199", href: "https://linkedin.com/in/srikesh-nair-b54646199", icon: "💼" },
  { label: "GitHub", value: "github.com/srinair7", href: "https://github.com/srinair7", icon: "🐙" },
  { label: "Location", value: "Bangalore, India", href: null, icon: "📍" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "80px 24px 60px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px", color: "#e2e8f0" }}>
          Get in Touch
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "32px" }}>
            I&apos;m open to opportunities in DevOps, Security Engineering, and AI Engineering. Whether you have a role, a project, or just want to connect — feel free to reach out.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    background: "rgba(168,85,247,0.1)",
                    borderRadius: "8px",
                    padding: "6px 8px",
                  }}
                >
                  {c.icon}
                </span>
                <div>
                  <p style={{ color: "#64748b", fontSize: "0.72rem", marginBottom: "2px" }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#c084fc", fontSize: "0.88rem", textDecoration: "none" }}>
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ color: "#94a3b8", fontSize: "0.88rem" }}>{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
          style={{ padding: "32px" }}
        >
          <h3 style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "1.1rem", marginBottom: "12px" }}>
            Download my Resume
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "24px", lineHeight: 1.7 }}>
            A full overview of my experience across security engineering, AI development, and product leadership.
          </p>
          <motion.a
            href="/Srikesh_Resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
            style={{ textAlign: "center", fontSize: "0.88rem", display: "block" }}
          >
            ⬇ Download Resume
          </motion.a>
        </motion.div>
      </div>

      <div
        style={{
          marginTop: "60px",
          paddingTop: "24px",
          borderTop: "1px solid #2a2a3a",
          textAlign: "center",
          color: "#64748b",
          fontSize: "0.82rem",
        }}
      >
        Built with Next.js & deployed on Vercel · © {new Date().getFullYear()} Srikesh Nair
      </div>
    </section>
  );
}
