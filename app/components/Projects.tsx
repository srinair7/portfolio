"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const projects = [
  {
    name: "ARIA",
    fullName: "Adaptive Reasoning & Intelligence Assistant",
    description:
      "Personal AI assistant powered by Claude with voice I/O, a web UI, and a Telegram bot. Built for real-world daily use with multi-modal interaction and persistent memory.",
    tags: ["Python", "Claude API", "Voice I/O", "Telegram Bot", "Web UI"],
    status: "In Progress",
    statusColor: "#facc15",
    statusBg: "rgba(234, 179, 8, 0.15)",
    github: "https://github.com/srinair7/aria",
    icon: "🤖",
    accent: "#a855f7",
  },
  {
    name: "Fortuna",
    fullName: "Financial Advisor Agent",
    description:
      "Agentic AI application providing personalized investment guidance to users with minimal financial knowledge. Connects to an MCP server for real-time data on stocks, mutual funds, and IPOs.",
    tags: ["Python", "Agentic AI", "MCP", "LLM APIs", "Recommendation Engine"],
    status: "In Progress",
    statusColor: "#facc15",
    statusBg: "rgba(234, 179, 8, 0.15)",
    github: null,
    icon: "📈",
    accent: "#818cf8",
  },
  {
    name: "Lumos",
    fullName: "CLI Installation Helper",
    description:
      "AI-powered CLI tool that converts natural language software installation requests into accurate, executable shell scripts. Powered by GPT-4 with auto-save to .sh files.",
    tags: ["Python", "GPT-4", "CLI", "Shell Scripting", "Prompt Engineering"],
    status: "Completed",
    statusColor: "#c084fc",
    statusBg: "rgba(168, 85, 247, 0.15)",
    github: "https://github.com/srinair7/lumos",
    icon: "✨",
    accent: "#c084fc",
  },
  {
    name: "JimJam",
    fullName: "AI Recipe Generator",
    description:
      "A handy recipe generator application that uses GPT API to generate personalized recipes based on available ingredients and dietary preferences.",
    tags: ["Python", "GPT API", "Web App", "NLP"],
    status: "Completed",
    statusColor: "#c084fc",
    statusBg: "rgba(168, 85, 247, 0.15)",
    github: "https://github.com/srinair7/jimjam",
    icon: "🍳",
    accent: "#f472b6",
  },
];

type Project = typeof projects[0];

function ParallaxCard({ project, i }: { project: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? 30 : 50, i % 2 === 0 ? -20 : -40]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div
        style={{
          background: "#13131a",
          border: "1px solid #2a2a3a",
          borderRadius: "16px",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          height: "100%",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = project.accent;
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px ${project.accent}26`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a3a";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "1.8rem",
                background: "rgba(168,85,247,0.1)",
                borderRadius: "10px",
                padding: "6px 10px",
              }}
            >
              {project.icon}
            </span>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "2px" }}>
                {project.name}
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.75rem" }}>{project.fullName}</p>
            </div>
          </div>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "20px",
              background: project.statusBg,
              color: project.statusColor,
              whiteSpace: "nowrap",
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Footer */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#c084fc",
              fontSize: "0.82rem",
              textDecoration: "none",
              fontWeight: 500,
              borderTop: "1px solid #2a2a3a",
              paddingTop: "16px",
              transition: "color 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px", color: "#e2e8f0" }}>
          Projects
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {projects.map((project, i) => (
          <ParallaxCard key={project.name} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
