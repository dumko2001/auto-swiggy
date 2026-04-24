"use client";

import { LayoutDashboard, ListTodo, Users, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Master List", href: "/dashboard/master-list", icon: <ListTodo size={20} /> },
    { name: "Users & Maids", href: "/dashboard/users", icon: <Users size={20} /> },
    { name: "Settings", href: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", background: "rgba(255, 255, 255, 0.02)", borderRight: "1px solid var(--border)", padding: "32px 16px", display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "40px", padding: "0 16px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "24px", height: "24px", background: "var(--accent)", borderRadius: "6px" }} />
            Autopilot
          </h2>
        </div>

        <nav style={{ flex: 1 }}>
          <ul style={{ listStyle: "none" }}>
            {navItems.map((item) => (
              <li key={item.name} style={{ marginBottom: "8px" }}>
                <Link 
                  href={item.href}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "12px", 
                    padding: "12px 16px", 
                    borderRadius: "12px",
                    color: pathname === item.href ? "white" : "var(--text-secondary)",
                    background: pathname === item.href ? "rgba(255, 255, 255, 0.05)" : "transparent",
                    transition: "all 0.2s ease"
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ marginTop: "auto", padding: "16px", borderTop: "1px solid var(--border)" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%", background: "none", border: "none", color: "#FF4D4D", cursor: "pointer", padding: "12px" }}>
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: "auto", background: "rgba(0,0,0,0.2)" }}>
        {children}
      </main>
    </div>
  );
}
