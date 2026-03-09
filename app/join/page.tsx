"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { PLANS } from "@/lib/data";
import Link from "next/link";

export default function JoinPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "", plan: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/submit-trial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      setError(null);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", goal: "", plan: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setError(errorMessage);
      console.error("Error submitting form:", error);
      // Keep form intact on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero tag="Start Today" title="JOIN" accent="NS FITNESS" sub="Your first session is completely free. No pressure — just results." />

      <section style={{ padding: "90px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
          <div>
            <div className="section-tag">What You Get</div>
            <h2 className="section-title">FREE TRIAL<br /><span style={{ color: "var(--yellow)" }}>INCLUDES:</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[["🏋️","Full Day Gym Access","Use every machine and zone — no restrictions."],["📋","Fitness Assessment","Understand your current fitness level and goals."],["👤","Trainer Walk-through","A certified coach shows you around and guides you."],["🥗","Nutrition Consult","Basic diet advice to get you started right."],["💬","No Sales Pressure","No hard sell. You decide if it's right for you."]].map(([ic, title, desc]) => (
                <div key={title} style={{ display: "flex", gap: 14, background: "var(--card)", border: "1px solid var(--border)", padding: "16px 18px" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{ic}</span>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", letterSpacing: "0.06em" }}>{title}</div>
                    <div style={{ fontSize: "0.83rem", color: "#888", marginTop: 3 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--card)", border: "1.5px solid var(--yellow)", padding: "44px 36px", boxShadow: "0 0 40px rgba(201,241,53,0.1)" }}>
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2rem", color: "var(--text)", letterSpacing: "0.04em", marginBottom: 6 }}>CLAIM YOUR</h3>
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2rem", color: "var(--yellow)", letterSpacing: "0.04em", marginBottom: 28 }}>FREE TRIAL</h3>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: 18 }}>🎉</div>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "2rem", color: "var(--yellow)", marginBottom: 10 }}>YOU'RE IN!</div>
                <p style={{ color: "#888", lineHeight: 1.7 }}>We'll call you within a few hours to schedule your free trial. Get ready to transform! 💪</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {error && (
                  <div style={{ background: "rgba(232,0,13,0.12)", border: "1px solid var(--border-red)", color: "#ff6666", padding: "12px 14px", borderRadius: "4px", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {error}
                  </div>
                )}
                <input className="input-field" placeholder="Full Name *" aria-label="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required disabled={loading} />
                <input className="input-field" type="tel" placeholder="Phone Number *" aria-label="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required disabled={loading} />
                <input className="input-field" type="email" placeholder="Email Address" aria-label="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} disabled={loading} />
                <select className="input-field" aria-label="Fitness goal" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} style={{ cursor: "pointer" }} disabled={loading}>
                  <option value="">Select Fitness Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Strength Training</option>
                  <option value="cardio">Cardio & Endurance</option>
                  <option value="general">General Fitness</option>
                </select>
                <select className="input-field" aria-label="Membership plan" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} style={{ cursor: "pointer" }} disabled={loading}>
                  <option value="">Interested In (optional)</option>
                  {PLANS.map((p) => <option key={p.name} value={p.name}>{p.name} — {p.price}{p.period}</option>)}
                </select>
                <button type="submit" className="btn-primary" style={{ clipPath: "none", fontSize: "1.05rem", marginTop: 6, padding: 16, opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }} disabled={loading}>{loading ? "Submitting..." : "Book My Free Trial →"}</button>
                <p style={{ fontSize: "0.78rem", color: "#555", textAlign: "center" }}>No credit card required. We'll call you to confirm.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}