"use client";
import PageHero from "@/components/PageHero";
import { FACILITIES } from "@/lib/data";
import Link from "next/link";

export default function FacilitiesPage() {
  return (
    <>
      <PageHero tag="World-Class Equipment" title="OUR" accent="FACILITIES" sub="Everything you need to crush every goal — all under one roof." />

      <section style={{ padding: "90px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {FACILITIES.map((f, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "36px 28px", transition: "all 0.35s", position: "relative", overflow: "hidden" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(201,241,53,0.4)"; el.style.transform = "translateY(-5px)"; const topBar = el.querySelector(".top-bar") as HTMLElement | null; if (topBar) topBar.style.transform = "scaleX(1)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; const topBar = el.querySelector(".top-bar") as HTMLElement | null; if (topBar) topBar.style.transform = "scaleX(0)"; }}>
                <div className="top-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--red), var(--yellow))", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s" }} />
                <div style={{ fontSize: "2.8rem", marginBottom: 18 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.25rem", color: "var(--text)", letterSpacing: "0.06em", marginBottom: 10, textTransform: "uppercase" }}>{f.title}</h3>
                <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, background: "linear-gradient(135deg, rgba(232,0,13,0.12), rgba(201,241,53,0.05))", border: "1px solid rgba(232,0,13,0.25)", padding: "52px 44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, alignItems: "center" }}>
              <div>
                <div className="section-tag">Equipment</div>
                <h2 className="section-title">RED LINE<br /><span style={{ color: "var(--red)" }}>PRO SERIES</span></h2>
                <p style={{ color: "#888", lineHeight: 1.9 }}>All equipment is professional-grade, regularly serviced, and built for maximum performance and safety.</p>
              </div>
              {[["50+","Machines"],["100+","Free Weight Sets"],["10+","Cardio Units"],["6","Functional Zones"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "3rem", color: "var(--red)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "0.8rem", color: "#666", letterSpacing: "0.1em", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 5%", textAlign: "center", background: "var(--dark)" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 14 }}>SEE IT FOR <span style={{ color: "var(--yellow)" }}>YOURSELF.</span></h2>
        <p style={{ color: "#888", marginBottom: 36 }}>Book a free trial and walk the floor with one of our coaches.</p>
        <Link href="/join" className="btn-primary">Book Free Trial →</Link>
      </section>
    </>
  );
}