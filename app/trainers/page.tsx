"use client";

import PageHero from "@/components/PageHero";
import TrainerCard from "@/components/TrainerCard";
import { TRAINERS } from "@/lib/data";
import Link from "next/link";

export default function TrainersPage() {
  return (
    <>
      <PageHero tag="The Experts" title="MEET YOUR" accent="COACHES" sub="Certified professionals obsessed with getting you results." />

      <section style={{ padding: "90px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {TRAINERS.map((t, i) => <TrainerCard key={i} {...t} />)}
          </div>

          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[["📋","Personalised Program","Every PT client gets a fully customised training and nutrition plan."],["📈","Progress Tracking","Regular assessments and body composition checks to keep results coming."],["🥗","Nutrition Guidance","Diet advice and macro coaching included with all personal training packages."],["💬","24/7 Support","WhatsApp access to your trainer for questions and accountability."]].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "28px 24px", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,241,53,0.35)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{icon}</div>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.05rem", color: "var(--text)", letterSpacing: "0.05em", marginBottom: 8 }}>{title}</div>
                <p style={{ fontSize: "0.88rem", color: "#888", lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 5%", textAlign: "center", background: "var(--dark)" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 14 }}>TRAIN WITH THE <span style={{ color: "var(--yellow)" }}>BEST.</span></h2>
        <p style={{ color: "#888", marginBottom: 36 }}>Book a free session and see what our coaches can do for you.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/join" className="btn-primary">Book Free Trial →</Link>
          <Link href="/membership" className="btn-outline">View PT Plans</Link>
        </div>
      </section>
    </>
  );
}