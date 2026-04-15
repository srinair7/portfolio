export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: "#a855f7",
            fontWeight: 600,
            fontSize: "0.9rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Hi, I&apos;m
        </p>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "16px",
            color: "#e2e8f0",
          }}
        >
          Srikesh Rajesh Nair
        </h1>

        <h2
          className="gradient-text"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          DevOps Engineer · Security SME · AI Builder
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: "640px",
            margin: "0 auto 40px",
          }}
        >
          Based in Bangalore, India. I build secure, cloud-native infrastructure
          and AI-powered developer tools at SAP Labs. Regional Security Lead,
          HashiCorp Vault &amp; Orca Security SME, and passionate about applying
          Generative AI to real-world engineering problems.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Certifications", value: "5" },
            { label: "Projects Shipped", value: "10+" },
            { label: "Languages Spoken", value: "5" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                className="gradient-text"
                style={{ fontSize: "2rem", fontWeight: 800 }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
