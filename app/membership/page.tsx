"use client";

import PageHero from "@/components/PageHero";
import PricingCard from "@/components/PricingCard";
import { PLANS } from "@/lib/data";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <>
      <PageHero tag="Simple Pricing" title="MEMBERSHIP" accent="PLANS" sub="Transparent pricing, zero hidden fees. Pick your plan and start today." />

      <section style={{ padding: "90px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 24 }}>
            {PLANS.map((p, i) => <PricingCard key={i} {...p} />)}
          </div>

          <div style={{ marginTop: 56, background: "var(--card)", border: "1px solid var(--border)", padding: "36px 40px" }}>
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.4rem", color: "var(--text)", letterSpacing: "0.06em", marginBottom: 24 }}>INCLUDED IN <span style={{ color: "var(--yellow)" }}>ALL PLANS</span></h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {["Access to all gym zones","Expert trainer guidance","AC facility","Parking available","Motivational environment","Clean locker rooms"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.9rem", color: "#aaa" }}>
                  <span style={{ color: "var(--yellow)", fontSize: "1rem" }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="section-tag">FAQ</div>
            <h2 className="section-title" style={{ marginBottom: 32 }}>COMMON <span style={{ color: "var(--yellow)" }}>QUESTIONS</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[["Can I freeze my membership?","Yes — members on Quarterly or Yearly plans can freeze for up to 30 days per year."],["Is there a joining fee?","No joining fee. You only pay for the plan you choose."],["Can I upgrade my plan?","Yes. You can upgrade at any time and we'll prorate the difference."],["What's in the free trial?","One full-day gym access with a complimentary fitness assessment and trainer walk-through."]].map(([q, a]) => (
                <div key={q} style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "22px 24px" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", letterSpacing: "0.04em", marginBottom: 8 }}>{q}</div>
                  <div style={{ fontSize: "0.88rem", color: "#888", lineHeight: 1.75 }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 5%", textAlign: "center", background: "var(--yellow)" }}>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--black)", lineHeight: 1, marginBottom: 14 }}>NOT SURE WHICH PLAN?</h2>
        <p style={{ color: "#333", marginBottom: 32 }}>Start with a free trial — no commitment required.</p>
        <Link href="/join" className="cta-button">Book Free Trial →</Link>
      </section>
    </>
  );
}