"use client";

import PageHero from "@/components/PageHero";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS } from "@/lib/data";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <PageHero tag="Testimonials" title="WHAT MEMBERS" accent="SAY" sub="Real results from real people. Don't take our word for it." />

      <section style={{ padding: "48px 5%", background: "var(--dark)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "5rem", color: "var(--yellow)", lineHeight: 1 }}>4.9</div>
            <div style={{ display: "flex", gap: 3, justifyContent: "center", marginTop: 6 }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#FFD700", fontSize: 22 }}>★</span>)}
            </div>
            <div style={{ color: "#666", fontSize: "0.82rem", marginTop: 6 }}>out of 5 on Google</div>
          </div>
          <div style={{ width: 1, height: 80, background: "var(--border)" }} />
          <div>
            {[5,4,3].map((stars) => (
              <div key={stars} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ color: "#FFD700", fontSize: 13 }}>{"★".repeat(stars)}</span>
                <div style={{ width: 120, height: 6, background: "var(--card)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: stars === 5 ? "90%" : stars === 4 ? "7%" : "3%", height: "100%", background: stars === 5 ? "var(--yellow)" : "var(--muted)" }} />
                </div>
                <span style={{ fontSize: "0.78rem", color: "#666" }}>{stars === 5 ? "90%" : stars === 4 ? "7%" : "3%"}</span>
              </div>
            ))}
          </div>
          <div style={{ width: 1, height: 80, background: "var(--border)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "3rem", color: "var(--red)", lineHeight: 1 }}>200+</div>
            <div style={{ color: "#666", fontSize: "0.82rem", marginTop: 6 }}>Google Reviews</div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {REVIEWS.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 5%", textAlign: "center", background: "var(--yellow)" }}>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--black)", lineHeight: 1, marginBottom: 14 }}>ADD YOUR OWN<br />SUCCESS STORY.</h2>
        <p style={{ color: "#333", marginBottom: 32 }}>Start today. Your review could inspire the next transformation.</p>
        <Link href="/join" style={{ background: "var(--black)", color: "var(--yellow)", border: "none", padding: "15px 40px", fontFamily: "'Anton', sans-serif", fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>Join Now →</Link>
      </section>
    </>
  );
}