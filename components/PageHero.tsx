"use client";

interface PageHeroProps {
  tag?: string;
  title: string;
  accent?: string;
  sub?: string;
}

export default function PageHero({ tag, title, accent, sub }: PageHeroProps) {
  return (
    <section style={{
      paddingTop: 140, paddingBottom: 70, paddingLeft: "5%", paddingRight: "5%",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg, rgba(201,241,53,0.04) 0%, transparent 50%)",
      borderBottom: "1px solid rgba(201,241,53,0.1)",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,241,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,241,53,0.05) 1px, transparent 1px)",
        backgroundSize: "50px 50px", pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {tag && <div className="section-tag">{tag}</div>}
        <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95, color: "#F0F0F0", letterSpacing: "0.02em" }}>
          {title}{accent && <> <span style={{ color: "var(--yellow)" }}>{accent}</span></>}
        </h1>
        {sub && <p style={{ color: "#888", fontSize: "1.05rem", marginTop: 16, maxWidth: 540, lineHeight: 1.8 }}>{sub}</p>}
      </div>
    </section>
  );
}