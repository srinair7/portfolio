"use client";
import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Security",
    icon: "🔐",
    skills: ["HashiCorp Vault", "Orca Security", "Splunk", "Incident Response", "Threat Modeling", "CSPM / CWPP", "IAM / RBAC", "App Security"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["LLM APIs", "Agentic AI", "LangChain", "Prompt Engineering", "MCP", "AIOps", "Model Red-Teaming", "RAG"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    skills: ["AWS", "Azure", "OpenStack", "Kubernetes", "Docker", "SAP BTP"],
  },
  {
    category: "CI/CD & DevOps",
    icon: "⚙️",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Flux", "Azure DevOps", "Perforce", "Gerrit"],
  },
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "Go", "Bash / Shell", "ABAP", "CDS", "SAP CAP"],
  },
  {
    category: "Certifications",
    icon: "🏅",
    skills: ["Certified SAP AI Developer", "AWS Certified AI Practitioner", "One Million Prompters", "Security Champion – SAP", "Generative AI@SAP"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px", color: "#e2e8f0" }}>
          Skills & Tools
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="card"
            style={{ padding: "24px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "1.3rem",
                  background: "rgba(168,85,247,0.1)",
                  borderRadius: "8px",
                  padding: "6px 8px",
                }}
              >
                {group.icon}
              </span>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#c084fc" }}>
                {group.category}
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
