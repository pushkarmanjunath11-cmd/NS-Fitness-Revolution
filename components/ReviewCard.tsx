interface ReviewCardProps {
  name: string; avatar: string; stars: number; text: string;
}

export default function ReviewCard({ name, avatar, stars, text }: ReviewCardProps) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "28px 24px", transition: "all 0.3s" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,241,53,0.35)"; el.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}>

      <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--red), #ff4444)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Anton', sans-serif", fontSize: "0.9rem", color: "#fff", flexShrink: 0 }}>
          {avatar}
        </div>
        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.95rem" }}>{name}</div>
          <div style={{ display: "flex", gap: 2, marginTop: 2 }} role="img" aria-label={`Rating: ${stars} out of 5`}>
            {[...Array(5)].map((_, i) => <span key={i} style={{ color: i < stars ? "#FFD700" : "#333", fontSize: 13 }} aria-hidden="true">★</span>)}
          </div>
        </div>
      </div>

      <p style={{ color: "var(--muted-light)", fontSize: "0.9rem", lineHeight: 1.8, fontStyle: "italic" }}>"{text}"</p>
      <div style={{ marginTop: 14, fontSize: "0.75rem", color: "#555", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#4285F4", fontWeight: 700, fontSize: "0.85rem" }}>G</span> Google Review
      </div>
    </div>
  );
}