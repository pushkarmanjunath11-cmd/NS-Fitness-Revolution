"use client";

import Link from "next/link";
import StatsBar from "@/components/StatsBar";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 70 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,241,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,241,53,0.04) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div style={{ position: "absolute", top: "12%", right: "-5%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,241,53,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-8%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,0,13,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 5%", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "inline-block", border: "1px solid rgba(201,241,53,0.2)", padding: "4px 18px", marginBottom: 22 }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--yellow)" }}>AECS Layout · Bangalore</span>
          </div>
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3.8rem, 10vw, 8.5rem)", lineHeight: 0.93, color: "#F0F0F0", marginBottom: 30, letterSpacing: "0.01em" }}>
            NO LIMITS.<br />
            <span style={{ WebkitTextStroke: "2px var(--yellow)", WebkitTextFillColor: "transparent" as any, color: "transparent" }}>NO EXCUSES.</span><br />
            JUST <span style={{ color: "var(--red)" }}>RESULTS.</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#888", maxWidth: 480, lineHeight: 1.85, marginBottom: 46 }}>
            AECS Layout's most energetic gym. Cutting-edge red equipment, certified coaches, and a culture that turns goals into reality.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/join" className="btn-primary">Book Free Trial →</Link>
            <Link href="/membership" className="btn-outline">View Plans</Link>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 54, flexWrap: "wrap" }}>
            {["Open 5 AM – 10 PM", "Certified Trainers", "Spacious & Clean"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#666" }}>
                <span style={{ color: "var(--yellow)" }}>◆</span> {t}
              </div>
            ))}
          </div>
        </div>

        {/* Ticker */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "var(--yellow)", padding: "11px 0", overflow: "hidden" }}>
          <div className="ticker-inner">
            {["STRENGTH","CARDIO","ENDURANCE","POWER","RESULTS","TRANSFORM","GRIND","DEDICATION",
              "STRENGTH","CARDIO","ENDURANCE","POWER","RESULTS","TRANSFORM","GRIND","DEDICATION"].map((w, i) => (
              <span key={i} style={{ fontFamily: "'Anton', sans-serif", fontSize: "0.88rem", letterSpacing: "0.22em", color: "var(--black)" }}>
                {w} <span style={{ color: "var(--red)", marginLeft: -4 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <StatsBar dark />

      {/* ABOUT SNIPPET */}
      <section style={{ padding: "90px 5%", background: "var(--dark)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
          <div>
            <div className="section-tag">Why NS Fitness</div>
            <h2 className="section-title">THE GYM THAT<br /><span style={{ color: "var(--yellow)" }}>NEVER QUITS.</span></h2>
            <p style={{ color: "#888", lineHeight: 1.9, marginBottom: 20 }}>NS Fitness Revolution isn't just another gym — it's a movement. Packed with premium red equipment and motivational murals, it's built to push you further every session.</p>
            <p style={{ color: "#888", lineHeight: 1.9, marginBottom: 36 }}>Located in the heart of AECS Layout, we've helped 200+ members achieve real, lasting transformations.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/about" className="btn-primary">Our Story</Link>
              <Link href="/facilities" className="btn-outline">See Facilities</Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[["🏟️","3,000+ sqft Floor"],["🔴","Pro Red Equipment"],["❄️","AC Facility"],["🚿","Spacious Lockers"],["🎨","Motivational Murals"],["🚫","Zero Crowding"]].map(([icon, text]) => (
              <div key={text} style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "18px 16px", display: "flex", gap: 10, alignItems: "center", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,241,53,0.35)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}>
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                <span style={{ fontSize: "0.88rem", color: "#aaa" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section style={{ padding: "74px 5%", background: "linear-gradient(135deg, rgba(232,0,13,0.12), rgba(201,241,53,0.05))", borderTop: "1px solid rgba(232,0,13,0.2)", borderBottom: "1px solid rgba(232,0,13,0.2)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <div className="section-tag">Real Results</div>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 12 }}>TRANSFORMATIONS THAT<br /><span style={{ color: "var(--yellow)" }}>SPEAK LOUDER.</span></h2>
          <p style={{ color: "#888", marginBottom: 40 }}>Hundreds of members have already changed their lives here.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
            {[["10 kg","2 months"],["8 kg","6 weeks"],["15 kg","3 months"],["12 kg","10 weeks"]].map(([v, l]) => (
              <div key={v} style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "22px 12px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.4rem", color: "var(--red)", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: "0.78rem", color: "#666", marginTop: 6 }}>Lost in {l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SNIPPET */}
      <section style={{ padding: "90px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-tag">Testimonials</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>MEMBERS <span style={{ color: "var(--yellow)" }}>LOVE IT.</span></h2>
            </div>
            <Link href="/reviews" className="btn-outline">All Reviews →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {REVIEWS.slice(0, 3).map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "80px 5%", background: "var(--yellow)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", color: "var(--black)", lineHeight: 1, marginBottom: 16 }}>
            READY TO START YOUR<br />TRANSFORMATION?
          </h2>
          <p style={{ color: "#333", fontSize: "1.05rem", marginBottom: 36, lineHeight: 1.7 }}>Join hundreds of members already crushing their goals. First trial is completely free.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/join" style={{ background: "var(--black)", color: "var(--yellow)", border: "none", padding: "15px 36px", fontFamily: "'Anton', sans-serif", fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>Join Now →</Link>
            <Link href="/contact" style={{ background: "transparent", color: "var(--black)", border: "2px solid var(--black)", padding: "14px 36px", fontFamily: "'Anton', sans-serif", fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}