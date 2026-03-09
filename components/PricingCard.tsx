import Link from "next/link";

interface PricingCardProps {
  name: string; price: string; period: string; popular: boolean; features: string[];
}

export default function PricingCard({ name, price, period, popular, features }: PricingCardProps) {
  return (
    <div style={{
      background: popular ? "linear-gradient(160deg, rgba(232,0,13,0.15), rgba(201,241,53,0.06))" : "var(--card)",
      border: popular ? "1.5px solid var(--yellow)" : "1px solid var(--border)",
      padding: "36px 28px", position: "relative", transition: "transform 0.35s, box-shadow 0.35s",
      boxShadow: popular ? "0 0 40px rgba(201,241,53,0.12)" : "none",
    }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(201,241,53,0.15)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = popular ? "0 0 40px rgba(201,241,53,0.12)" : "none"; }}>

      {popular && <div style={{ position: "absolute", top: 0, right: 0, background: "var(--yellow)", color: "var(--black)", padding: "4px 18px", fontFamily: "'Anton', sans-serif", fontSize: "0.72rem", letterSpacing: "0.12em" }}>BEST VALUE</div>}

      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.22em", color: popular ? "var(--yellow)" : "var(--muted)", marginBottom: 18 }}>{name}</div>
      <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "3rem", color: "var(--text)", lineHeight: 1, marginBottom: 4 }}>{price}</div>
      <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: 28 }}>{period}</div>
      <div style={{ height: 1, background: popular ? "rgba(201,241,53,0.2)" : "var(--border)", marginBottom: 24 }} />

      {features.map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, fontSize: "0.9rem", color: "var(--muted-light)", alignItems: "flex-start" }}>
          <span style={{ color: popular ? "var(--yellow)" : "var(--red)", flexShrink: 0, marginTop: 2 }}>✓</span> {f}
        </div>
      ))}

      <Link href="/join" style={{
        display: "block", textAlign: "center", marginTop: 28, padding: 14,
        fontFamily: "'Anton', sans-serif", fontSize: "0.95rem", letterSpacing: "0.08em",
        textTransform: "uppercase", cursor: "pointer", textDecoration: "none", transition: "all 0.25s",
        ...(popular ? { background: "var(--yellow)", color: "var(--black)", border: "none" } : { background: "transparent", color: "var(--yellow)", border: "1.5px solid var(--yellow)" }),
      }}>
        Get Started
      </Link>
    </div>
  );
}