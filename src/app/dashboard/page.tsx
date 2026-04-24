"use client";

import { motion } from "framer-motion";
import { Wallet, ShoppingCart, TrendingUp, Clock } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "8px" }}>Welcome back, Sidharth</h1>
        <p style={{ color: "var(--text-secondary)" }}>Your household is running on autopilot.</p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "40px" }}>
        <StatCard 
          icon={<Wallet color="var(--accent)" />}
          label="Swiggy Money"
          value="₹1,240.00"
          trend="Status: Healthy"
        />
        <StatCard 
          icon={<ShoppingCart color="#00C853" />}
          label="Orders this month"
          value="12"
          trend="+3 from last month"
        />
        <StatCard 
          icon={<TrendingUp color="#2979FF" />}
          label="Estimated Monthly"
          value="₹2,850"
          trend="Within Budget"
        />
        <StatCard 
          icon={<Clock color="#FFD600" />}
          label="Last Activity"
          value="2h ago"
          trend="Milk restocked"
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
        {/* Recent Activity */}
        <section className="glass" style={{ padding: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Recent Activity</h2>
          <div style={{ display: "grid", gap: "16px" }}>
            <ActivityItem 
              title="Milk Restocked"
              user="Maid (Lata)"
              time="Today, 08:15 AM"
              amount="₹54.00"
              status="Delivered"
            />
            <ActivityItem 
              title="Refined Oil"
              user="Lata"
              time="Yesterday, 06:30 PM"
              amount="₹180.00"
              status="Delivered"
            />
            <ActivityItem 
              title="Wallet Top-up"
              user="System"
              time="23 Apr, 10:00 AM"
              amount="+₹1,000.00"
              status="Completed"
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="glass" style={{ padding: "24px" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Active Users</h2>
          <div style={{ display: "grid", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--accent-muted)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: "600", color: "var(--accent)" }}>SL</div>
              <div>
                <p style={{ fontWeight: "600" }}>Sidharth (Admin)</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Owner</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: "600" }}>LL</div>
              <div>
                <p style={{ fontWeight: "600" }}>Lata (Maid)</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Assistant</p>
              </div>
            </div>
            <button className="btn-secondary" style={{ width: "100%", marginTop: "12px" }}>Manage Access</button>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend }: any) {
  return (
    <div className="glass" style={{ padding: "24px" }}>
      <div style={{ marginBottom: "16px" }}>{icon}</div>
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "4px" }}>{label}</p>
      <p style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "8px" }}>{value}</p>
      <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{trend}</p>
    </div>
  );
}

function ActivityItem({ title, user, time, amount, status }: any) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.02)" }}>
      <div>
        <p style={{ fontWeight: "600" }}>{title}</p>
        <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Triggered by {user} • {time}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontWeight: "600" }}>{amount}</p>
        <p style={{ fontSize: "0.8rem", color: "#00C853" }}>{status}</p>
      </div>
    </div>
  );
}
