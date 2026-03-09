"use client";
import { useState, useRef, useEffect } from "react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    timeoutRef.current = setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero tag="Get In Touch" title="CONTACT" accent="US" sub="Have a question? Want to visit? We'd love to hear from you." />

      <section style={{ padding: "90px 5%", background: "var(--black)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
          <div>
            <div className="section-tag">Find Us</div>
            <h2 className="section-title">WE'RE RIGHT<br /><span style={{ color: "var(--yellow)" }}>HERE FOR YOU.</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 8 }}>
              {[["📍","Address","AECS Layout, Bangalore, Karnataka – 560037"],["📞","Phone","+91 99999 99999"],["📧","Email","info@nsfitnessrevolution.com"],["🕒","Hours","Mon–Sat: 5:00 AM – 10:00 PM\nSun: 6:00 AM – 8:00 PM"]].map(([icon, label, value]) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 42, height: 42, background: "rgba(201,241,53,0.07)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--yellow)", marginBottom: 4 }}>{label}</div>
                    <div style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.7, whiteSpace: "pre-line" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "44px 36px" }}>
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.8rem", color: "var(--text)", letterSpacing: "0.05em", marginBottom: 28 }}>SEND A <span style={{ color: "var(--yellow)" }}>MESSAGE</span></h3>
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>✅</div>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.8rem", color: "var(--yellow)", marginBottom: 8 }}>MESSAGE SENT!</div>
                <p style={{ color: "#888" }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input className="input-field" placeholder="Full Name *" aria-label="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <input className="input-field" type="tel" placeholder="Phone Number *" aria-label="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                <input className="input-field" type="email" placeholder="Email Address" aria-label="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <textarea className="input-field" placeholder="Your message..." aria-label="Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                <button type="submit" className="btn-primary" style={{ clipPath: "none", fontSize: "1rem", marginTop: 8 }}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}