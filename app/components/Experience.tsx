"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate DevOps Engineer",
    company: "SAP Labs India",
    period: "Aug 2021 – Present",
    location: "Bangalore, India",
    bullets: [
      "Subject Matter Expert for HashiCorp Vault — designed dynamic secret policies, RBAC, and automated rotation across AI Core infrastructure, securing secrets for 50+ AI microservices.",
      "Owned Orca Security deployment across 25+ cloud assets on AWS, Azure, GCP, and OpenStack; automated security incident detection and response, driving a ~40% reduction in incidents through security automation.",
      "Conducted threat modeling, vulnerability assessments, and hands-on incident triage using Splunk; automated IR playbooks significantly reducing mean-time-to-respond.",
      "Built and maintained CI/CD pipelines serving 100–200 pipelines across an entire Line of Business using GitHub Actions, Jenkins, and Azure DevOps.",
      "Managed multi-cloud environments across AWS, GCP, and Azure using Docker and Kubernetes for AI Security and Cloud Ops teams.",
      "Developed Python CLI tools leveraging LLM APIs to automate log analysis, security workflows, and operational troubleshooting — reducing manual toil for the team.",
      "Building AI agents and MCP servers to automate DevOps workflows and reduce manual effort — currently integrating into the platform for org-wide availability.",
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
      "Earned the Security Champion badge after completing SAP's internal security bootcamp.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px", color: "#e2e8f0" }}>
          Experience
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={{ display: "flex", gap: "20px" }}
          >
            {/* Timeline */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                className="timeline-dot"
              />
              {i < experiences.length - 1 && (
                <div className="timeline-line" style={{ flex: 1, minHeight: "40px" }} />
              )}
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="card"
              style={{ padding: "28px", flex: 1, marginBottom: "8px" }}
            >
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
                    background: "rgba(168,85,247,0.1)",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p style={{ color: "#c084fc", fontSize: "0.9rem", marginBottom: "4px" }}>
                {exp.company}
              </p>
              <p style={{ color: "#64748b", fontSize: "0.82rem", marginBottom: "16px" }}>
                📍 {exp.location}
              </p>
              <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
