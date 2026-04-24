"use client";

import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Zap, ArrowRight, Wallet } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", textAlign: "center" }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{ padding: "60px 40px", maxWidth: "800px", width: "100%", position: "relative", overflow: "hidden" }}
      >
        {/* Glow effect */}
        <div style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle, rgba(255, 82, 0, 0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          style={{ background: "var(--accent)", width: "64px", height: "64px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", boxShadow: "0 8px 32px rgba(255, 82, 0, 0.4)" }}
        >
          <Zap size={32} color="white" />
        </motion.div>

        <h1 style={{ fontSize: "3.5rem", marginBottom: "16px", fontWeight: "800", background: "linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Swiggy Autopilot
        </h1>
        <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" }}>
          The Household OS. Automate your essentials via Swiggy Instamart with zero-friction WhatsApp triggers.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "60px" }}>
          <button className="btn-primary">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            View Master List
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "left" }}>
          <FeatureCard 
            icon={<ShieldCheck size={24} color="var(--accent)" />}
            title="Admin Guardrails"
            desc="Set monthly budgets and approved item lists."
          />
          <FeatureCard 
            icon={<Zap size={24} color="var(--accent)" />}
            title="WhatsApp Trigger"
            desc="Maid says 'Milk', Autopilot does the rest."
          />
          <FeatureCard 
            icon={<Wallet size={24} color="var(--accent)" />}
            title="Auto-Wallet"
            desc="Connected to Swiggy Money for seamless refills."
          />
        </div>
      </motion.div>

      <footer style={{ marginTop: "40px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
        Powered by Swiggy Builders Club MCP
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div style={{ padding: "20px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
      <div style={{ marginBottom: "12px" }}>{icon}</div>
      <h3 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{desc}</p>
    </div>
  );
}
