interface TrainerCardProps {
  name: string; role: string; exp: string; spec: string; cert: string; icon: string;
}

export default function TrainerCard({ name, role, exp, spec, cert, icon }: TrainerCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Trigger same action as onClick if card is interactive
    }
  };

  const ariaLabel = `${name}, ${role}. Experience: ${exp}. Specialty: ${spec}. Certification: ${cert}`;

  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "36px 24px", textAlign: "center", transition: "all 0.4s", position: "relative", overflow: "hidden" }}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--yellow)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(201,241,53,0.12)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--red), var(--yellow))" }} />

      <div style={{ width: 88, height: 88, borderRadius: "50%", background: "linear-gradient(135deg, var(--red), #ff4444)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.4rem", margin: "0 auto 20px", border: "3px solid rgba(201,241,53,0.2)", animation: "floatY 6s ease-in-out infinite" }}>
        {icon}
      </div>

      <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.7rem", color: "var(--text)", letterSpacing: "0.04em", marginBottom: 4 }}>{name}</h3>
      <div style={{ color: "var(--yellow)", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 }}>{role}</div>
      <div style={{ display: "inline-block", background: "rgba(232,0,13,0.12)", border: "1px solid var(--border-red)", color: "#ff6666", fontSize: "0.72rem", padding: "2px 12px", marginBottom: 20, letterSpacing: "0.08em" }}>{cert}</div>

      <div style={{ height: 1, background: "var(--border)", marginBottom: 20 }} />
      <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.1rem", color: "var(--yellow)" }}>{exp}</div>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 2 }}>Experience</div>
        </div>
        <div style={{ width: 1, background: "var(--border)" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.82rem", color: "var(--text)", maxWidth: 100 }}>{spec}</div>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 2 }}>Specialty</div>
        </div>
      </div>
    </div>
  );
}