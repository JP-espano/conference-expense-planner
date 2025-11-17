import React, { useState } from "react";
import "./ProductSelection.css";

export default function ProductSelection() {
  const rooms = [
    { name: "Auditorium Hall", capacity: 200, price: 5500 },
    { name: "Conference Room", capacity: 15, price: 3500 },
    { name: "Presentation Room", capacity: 50, price: 700 },
    { name: "Large Meeting Room", capacity: 10, price: 900 },
    { name: "Small Meeting Room", capacity: 5, price: 1100 },
  ];

  const addons = [
    { name: "Speakers", price: 35 },
    { name: "Microphones", price: 45 },
    { name: "Whiteboards", price: 80 },
    { name: "Projectors", price: 200 },
    { name: "Signage", price: 80 },
  ];

  const [activeTab, setActiveTab] = useState("venue");
  const [roomCounts, setRoomCounts] = useState(
    rooms.reduce((acc, r) => ({ ...acc, [r.name]: 0 }), {})
  );
  const [addonCounts, setAddonCounts] = useState(
    addons.reduce((acc, a) => ({ ...acc, [a.name]: 0 }), {})
  );

  // use functional updates to avoid stale state
  const increment = (setter, key) =>
    setter(prev => ({ ...prev, [key]: (prev[key] || 0) + 1 }));

  const decrement = (setter, key) =>
    setter(prev => ({ ...prev, [key]: Math.max(0, (prev[key] || 0) - 1) }));

  return (
    <div className="product-page">
      <header className="product-header">
        <div className="header-left">
          <h1>Conference Expense Planner</h1>
        </div>

        <nav className="header-right">
          <button
            className={activeTab === "venue" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("venue")}
          >
            Venue
          </button>

          <button
            className={activeTab === "addons" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("addons")}
          >
            Add-ons
          </button>

          <button
            className={activeTab === "meals" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("meals")}
          >
            Meals
          </button>

          <button className="tab-btn details" onClick={() => alert("Show details (coming soon)")} >
            Show Details
          </button>
        </nav>
      </header>

      {/* TABS: each has class tab-section; only the active one has .active (display:block) */}
      <main className="tabs-container">
        <section className={`tab-section ${activeTab === "venue" ? "active" : ""}`}>
          <h2>Venue Room Selection</h2>
          {rooms.map(r => (
            <div key={r.name} className="item-row">
              <div className="item-info">
                <strong>{r.name}</strong>
                <div className="meta">Capacity: {r.capacity} • ${r.price}</div>
              </div>

              <div className="item-controls">
                <button onClick={() => decrement(setRoomCounts, r.name)}>-</button>
                <span className="count">{roomCounts[r.name] || 0}</span>
                <button onClick={() => increment(setRoomCounts, r.name)}>+</button>
              </div>
            </div>
          ))}
        </section>

        <section className={`tab-section ${activeTab === "addons" ? "active" : ""}`}>
          <h2>Audio/Visual Add-ons</h2>
          {addons.map(a => (
            <div key={a.name} className="item-row">
              <div className="item-info">
                <strong>{a.name}</strong>
                <div className="meta">${a.price}</div>
              </div>

              <div className="item-controls">
                <button onClick={() => decrement(setAddonCounts, a.name)}>-</button>
                <span className="count">{addonCounts[a.name] || 0}</span>
                <button onClick={() => increment(setAddonCounts, a.name)}>+</button>
              </div>
            </div>
          ))}
        </section>

        <section className={`tab-section ${activeTab === "meals" ? "active" : ""}`}>
          <h2>Meals</h2>
          <p>Meal controls will go here (per-person inputs). We can add this next.</p>
        </section>
      </main>
    </div>
  );
}
