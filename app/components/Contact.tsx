const contacts = [
  {
    label: "Email",
    value: "srikesh_2000@live.com",
    href: "mailto:srikesh_2000@live.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/srikesh-nair-b54646199",
    href: "https://linkedin.com/in/srikesh-nair-b54646199",
    icon: "💼",
  },
  {
    label: "Location",
    value: "Bangalore, India",
    href: null,
    icon: "📍",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 24px 60px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px", color: "#e2e8f0" }}>
        Get in Touch
      </h2>
      <div className="section-divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "32px" }}>
            I&apos;m open to opportunities in Security Engineering, AI Engineering,
            and Product Management. Whether you have a role, a project, or just
            want to connect — feel free to reach out.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {contacts.map((c) => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "1.3rem" }}>{c.icon}</span>
                <div>
                  <p style={{ color: "#64748b", fontSize: "0.75rem", marginBottom: "2px" }}>
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{ color: "#c084fc", fontSize: "0.9rem", textDecoration: "none" }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: "32px" }}>
          <h3 style={{ color: "#e2e8f0", fontWeight: 600, marginBottom: "24px" }}>
            Download my Resume
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "24px", lineHeight: 1.7 }}>
            Available in versions tailored for Security Engineering, AI Engineering,
            and Product Management roles.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Security Engineer CV", file: "Srikesh_Resume_SecurityEngineer.pdf" },
              { label: "AI Engineer CV", file: "Srikesh_Resume_AIEngineer.pdf" },
              { label: "Product Manager CV", file: "Srikesh_Resume_ProductManager.pdf" },
            ].map((r) => (
              <a
                key={r.label}
                href={`/${r.file}`}
                download
                className="btn-outline"
                style={{ textAlign: "center", fontSize: "0.85rem" }}
              >
                ⬇ {r.label}
              </a>
            ))}
          </div>
        </div>
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
        Built with Next.js & deployed on Vercel · © {new Date().getFullYear()} Srikesh Rajesh Nair
      </div>
    </section>
  );
}
