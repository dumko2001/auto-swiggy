"use client";

import { motion } from "framer-motion";
import { Plus, Trash2, Edit2, ShoppingBag, AlertCircle } from "lucide-react";
import { useState } from "react";

interface MasterItem {
  id: string;
  name: string;
  sku: string;
  triggerQty: number;
  orderQty: number;
  monthlyLimit: number;
  currentSpend: number;
}

const MOCK_ITEMS: MasterItem[] = [
  { id: "1", name: "Nandini GoodLife Toned Milk 500ml", sku: "SKU-MILK-001", triggerQty: 2, orderQty: 2, monthlyLimit: 2000, currentSpend: 450 },
  { id: "2", name: "Fortune Sunlite Refined Sunflower Oil 1L", sku: "SKU-OIL-002", triggerQty: 1, orderQty: 1, monthlyLimit: 1000, currentSpend: 180 },
];

export default function MasterListPage() {
  const [items, setItems] = useState<MasterItem[]>(MOCK_ITEMS);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "8px" }}>Master List</h1>
          <p style={{ color: "var(--text-secondary)" }}>Items approved for automatic restocking.</p>
        </div>
        <button className="btn-primary">
          <Plus size={20} /> Add New Item
        </button>
      </header>

      <div style={{ display: "grid", gap: "20px" }}>
        {items.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass"
            style={{ padding: "24px", display: "grid", gridTemplateColumns: "1fr auto auto auto", alignItems: "center", gap: "40px" }}
          >
            <div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>{item.name}</h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{item.sku}</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>Trigger at</p>
              <p style={{ fontWeight: "600" }}>{item.triggerQty} units left</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>Budget Used</p>
              <p style={{ fontWeight: "600" }}>₹{item.currentSpend} / ₹{item.monthlyLimit}</p>
              <div style={{ width: "100px", height: "4px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "2px", marginTop: "8px", overflow: "hidden" }}>
                <div style={{ width: `${(item.currentSpend / item.monthlyLimit) * 100}%`, height: "100%", background: "var(--accent)" }} />
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button style={{ padding: "8px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.05)", border: "none", cursor: "pointer", color: "white" }}>
                <Edit2 size={18} />
              </button>
              <button style={{ padding: "8px", borderRadius: "8px", background: "rgba(255, 82, 0, 0.1)", border: "none", cursor: "pointer", color: "var(--accent)" }}>
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {items.length === 0 && (
        <div style={{ padding: "80px", textAlign: "center", border: "2px dashed var(--border)", borderRadius: "16px" }}>
          <ShoppingBag size={48} style={{ color: "var(--text-secondary)", marginBottom: "16px" }} />
          <h3>Your Master List is empty</h3>
          <p style={{ color: "var(--text-secondary)", marginTop: "8px" }}>Add items you want to automate.</p>
        </div>
      )}

      <section style={{ marginTop: "60px", padding: "24px", background: "rgba(255, 82, 0, 0.05)", borderRadius: "16px", border: "1px solid rgba(255, 82, 0, 0.2)", display: "flex", gap: "16px", alignItems: "center" }}>
        <AlertCircle color="var(--accent)" />
        <div>
          <h4 style={{ color: "var(--accent)" }}>Swiggy Money Auto-Refill</h4>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            Autopilot will only trigger orders if your Swiggy Money balance is above ₹200. Add money once and forget about it.
          </p>
        </div>
      </section>
    </div>
  );
}
