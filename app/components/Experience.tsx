const experiences = [
  {
    role: "Associate DevOps Engineer – Security SME",
    company: "SAP AI CloudOps and Security, SAP Labs India",
    period: "Mar 2024 – Present",
    location: "Bangalore, India",
    bullets: [
      "Subject Matter Expert for HashiCorp Vault — designed dynamic secret policies, RBAC, and automated rotation across AI Core infrastructure.",
      "Owned Orca Security deployment for continuous CSPM across AWS and OpenStack, automating compliance checks and ensuring infrastructure integrity.",
      "Conducted threat modeling, vulnerability assessments, and hands-on incident triage using Splunk; automated IR playbooks to reduce mean-time-to-respond.",
      "Developed Python CLI tools leveraging LLM APIs to automate security workflows, compliance reporting, and operational troubleshooting.",
      "Integrated Generative AI into DevOps workflows, reducing manual toil and accelerating engineering velocity.",
    ],
  },
  {
    role: "Scholar@SAP – VT/STAR Program",
    company: "SAP Labs India",
    period: "Aug 2021 – Mar 2024",
    location: "Bangalore, India",
    subtitle: "DevSecOps | DevOps | Cloud Integration | Agile Delivery",
    bullets: [
      "DevSecOps (AI Security & Cloud Ops): Managed multi-cloud environments (AWS, Docker, Kubernetes); responded to security incidents and automated governance tasks.",
      "CI/CD Monitoring (SAP Tools): Built and maintained HyperSpace CI/CD pipelines using Azure DevOps, Jenkins, Splunk, Go, Perforce, and Gerrit.",
      "DevOps (SAP Ariba): Optimized CI/CD pipelines in a microservices monorepo; improved build/test efficiency for a fast-moving Agile team.",
      "Cloud Integration (SAP BTP): Built API tooling using ABAP, CDS, and SAP CAP — delivered 3 customer-facing projects with full API lifecycle ownership.",
    ],
  },
  {
    role: "India Regional Lead – Security Ambassador Program",
    company: "SAP SGS Team",
    period: "Oct 2022 – Present",
    location: "Bangalore, India",
    bullets: [
      "Lead the regional SAP Security Ambassador Program, fostering a proactive 'security-first' culture across engineering teams.",
      "Directed the 'Hive Experiments' cybersecurity research group (MD's Office initiative) — prototyping AI-assisted threat detection, encryption, and biometrics.",
      "Designed gamified security awareness programs and knowledge exchange sessions in partnership with SAP Global Security.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "80px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px", color: "#e2e8f0" }}
      >
        Experience
      </h2>
      <div className="section-divider" />

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {experiences.map((exp, i) => (
          <div key={i} style={{ display: "flex", gap: "20px" }}>
            {/* Timeline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <div className="timeline-dot" />
              {i < experiences.length - 1 && (
                <div className="timeline-line" style={{ flex: 1, minHeight: "40px" }} />
              )}
            </div>

            {/* Content */}
            <div className="card" style={{ padding: "24px", flex: 1, marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "4px",
                }}
              >
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e2e8f0" }}>
                  {exp.role}
                </h3>
                <span
                  style={{
                    color: "#a855f7",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p style={{ color: "#c084fc", fontSize: "0.9rem", marginBottom: "4px" }}>
                {exp.company}
              </p>
              {exp.subtitle && (
                <p style={{ color: "#64748b", fontSize: "0.82rem", marginBottom: "12px", fontStyle: "italic" }}>
                  {exp.subtitle}
                </p>
              )}
              <p style={{ color: "#64748b", fontSize: "0.82rem", marginBottom: "12px" }}>
                📍 {exp.location}
              </p>
              <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
