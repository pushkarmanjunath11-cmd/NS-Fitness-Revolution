"use client";
import { useState, useEffect, useRef } from "react";
import { STATS } from "@/lib/data";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, active, dark }: { value: number; suffix: string; label: string; active: boolean; dark: boolean }) {
  const n = useCountUp(value, active);
  return (
    <div style={{ textAlign: "center", padding: "32px 20px" }}>
      <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.4rem,5vw,3.4rem)", color: dark ? "var(--black)" : "var(--yellow)", lineHeight: 1 }}>
        {n}{suffix}
      </div>
      <div style={{ fontSize: "0.78rem", color: dark ? "#333" : "var(--muted)", textTransform: "uppercase", letterSpacing: "0.18em", marginTop: 8 }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBar({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: dark ? "var(--yellow)" : "rgba(201,241,53,0.06)", borderTop: "1px solid rgba(201,241,53,0.15)", borderBottom: "1px solid rgba(201,241,53,0.15)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 5%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {STATS.map((s, i) => <StatItem key={i} {...s} active={active} dark={dark} />)}
      </div>
    </section>
  );
}