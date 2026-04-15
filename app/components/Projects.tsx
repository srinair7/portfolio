const projects = [
  {
    name: "Financial Advisor Agent",
    codename: "Codename: Fortuna",
    description:
      "An agentic AI application providing personalized investment guidance to users with minimal financial knowledge. Connects to an MCP server to pull and analyze real-time data on stocks, mutual funds, and IPOs.",
    tags: ["Python", "Agentic AI", "MCP", "LLM APIs", "Recommendation Engine"],
    status: "In Progress",
    highlights: [
      "Real-time financial data via MCP server integration",
      "Risk-profile-aware investment recommendation engine",
      "Dynamic tool-use and agent orchestration",
    ],
  },
  {
    name: "CLI Installation Helper",
    codename: "Codename: Lumos",
    description:
      "An AI-powered CLI tool that converts natural language software installation queries into accurate, executable shell scripts using a prompted GPT-4 model.",
    tags: ["Python", "GPT-4", "Shell Scripting", "CLI", "Prompt Engineering"],
    status: "Completed",
    highlights: [
      "Natural language → executable shell script pipeline",
      "Auto-saves generated scripts to .sh for immediate use",
      "Demonstrates applied prompt engineering at the tool-use level",
    ],
  },
  {
    name: "AI-Assisted Security Automation",
    codename: "Internal Tooling @ SAP",
    description:
      "Internal Python CLI tools that leverage Generative AI to automate security script generation, policy enforcement checks, and incident triage — reducing analyst toil and accelerating response times.",
    tags: ["Python", "LLM APIs", "Security Automation", "AIOps", "IR Playbooks"],
    status: "Production",
    highlights: [
      "LLM-powered alert triage and remediation suggestions",
      "Automated compliance reporting and policy checks",
      "Integrated into live security operations at SAP",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px", color: "#e2e8f0" }}>
        Projects
      </h2>
      <div className="section-divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((project) => (
          <div key={project.name} className="card" style={{ padding: "28px", display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "8px",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#e2e8f0" }}>
                {project.name}
              </h3>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  padding: "2px 10px",
                  borderRadius: "20px",
                  background:
                    project.status === "Production"
                      ? "rgba(34, 197, 94, 0.15)"
                      : project.status === "Completed"
                      ? "rgba(168, 85, 247, 0.15)"
                      : "rgba(234, 179, 8, 0.15)",
                  color:
                    project.status === "Production"
                      ? "#4ade80"
                      : project.status === "Completed"
                      ? "#c084fc"
                      : "#facc15",
                  whiteSpace: "nowrap",
                }}
              >
                {project.status}
              </span>
            </div>

            <p style={{ color: "#a855f7", fontSize: "0.8rem", marginBottom: "14px", fontStyle: "italic" }}>
              {project.codename}
            </p>

            <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>
              {project.description}
            </p>

            <ul style={{ paddingLeft: "16px", marginBottom: "20px" }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  {h}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
