"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import AbstractBackground from "./AbstractBackground";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Certifications", value: "5" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Languages Spoken", value: "5" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
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
      {/* Animated canvas background with parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y: bgY,
          zIndex: 0,
        }}
      >
        <AbstractBackground />
      </motion.div>

      {/* Purple glow blobs */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(ellipse, rgba(129,140,248,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
        }}
      />

      {/* Text content with parallax + fade */}
      <motion.div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          y: textY,
          opacity,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "16px",
            color: "#e2e8f0",
          }}
        >
          Srikesh Nair
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="gradient-text"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Platform Engineer · AI Whisperer · Security Nerd
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            color: "#94a3b8",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: "640px",
            margin: "0 auto 40px",
          }}
        >
          Platform engineer by day, AI tinkerer by night, and a security nerd always. I build cloud-native infrastructure and AI-powered tools at SAP Labs — and occasionally cause trouble in the best way possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            padding: "28px 32px",
            background: "rgba(168, 85, 247, 0.05)",
            border: "1px solid rgba(168, 85, 247, 0.15)",
            borderRadius: "16px",
            backdropFilter: "blur(8px)",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
              style={{ textAlign: "center" }}
            >
              <div className="gradient-text" style={{ fontSize: "2rem", fontWeight: 800 }}>
                {stat.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.78rem", marginTop: "4px" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
