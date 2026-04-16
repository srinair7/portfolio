"use client";
import { useEffect, useRef } from "react";

export default function AbstractBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Aurora blobs
    type Blob = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      r: number;
      g: number;
      b: number;
      phase: number;
      speed: number;
    };

    const blobs: Blob[] = [
      { x: width * 0.2,  y: height * 0.3, vx: 0.15, vy: 0.08, radius: 380, r: 139, g: 92,  b: 246, phase: 0,    speed: 0.004 },
      { x: width * 0.7,  y: height * 0.5, vx: -0.1, vy: 0.12, radius: 320, r: 99,  g: 102, b: 241, phase: 1.5,  speed: 0.003 },
      { x: width * 0.5,  y: height * 0.7, vx: 0.08, vy: -0.1, radius: 350, r: 168, g: 85,  b: 247, phase: 3.0,  speed: 0.005 },
      { x: width * 0.85, y: height * 0.2, vx: -0.12,vy: 0.09, radius: 280, r: 59,  g: 130, b: 246, phase: 0.8,  speed: 0.003 },
      { x: width * 0.1,  y: height * 0.75,vx: 0.1,  vy: -0.07,radius: 300, r: 192, g: 132, b: 252, phase: 2.2,  speed: 0.004 },
    ];

    let t = 0;

    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      for (const blob of blobs) {
        // Drift with sine wave for organic feel
        blob.x += blob.vx + Math.sin(t + blob.phase) * 0.3;
        blob.y += blob.vy + Math.cos(t + blob.phase * 0.7) * 0.2;

        // Bounce off edges softly
        if (blob.x < -blob.radius) blob.x = width + blob.radius;
        if (blob.x > width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = height + blob.radius;
        if (blob.y > height + blob.radius) blob.y = -blob.radius;

        // Pulsing alpha
        const alpha = 0.12 + Math.sin(t * 1.5 + blob.phase) * 0.04;

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        gradient.addColorStop(0, `rgba(${blob.r}, ${blob.g}, ${blob.b}, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(${blob.r}, ${blob.g}, ${blob.b}, ${alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${blob.r}, ${blob.g}, ${blob.b}, 0)`);

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(40px)",
      }}
    />
  );
}
