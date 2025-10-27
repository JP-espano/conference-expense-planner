import React from "react";
import { Link } from "react-router-dom";
import "./ProductSelection.css"; // optional, create if you want styles

export default function ProductSelection() {
  return (
    <div className="product-page" style={{ padding: 24 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Product Selection</h1>
        <Link to="/" style={{ color: "#ffb347", textDecoration: "none" }}>← Back to Landing</Link>
      </header>

      <p style={{ marginTop: 12 }}>
        Select Rooms, Add-ons, and Meals here. (This is the placeholder page — we'll add the room/add-on UI next.)
      </p>

      {/* Quick placeholder sections to show where each area will go */}
      <section style={{ marginTop: 20 }}>
        <h2>Rooms</h2>
        <p>Auditorium, Conference room, Presentation room, etc. (will have +/- controls)</p>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Add-ons</h2>
        <p>Speakers, Microphones, Projectors, etc.</p>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Meals</h2>
        <p>Breakfast, Lunch, Dinner inputs</p>
      </section>
    </div>
  );
}
