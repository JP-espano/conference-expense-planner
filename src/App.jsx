import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductSelection from "./pages/ProductSelection";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="text-box">
          <h1>Conference Expense Planner</h1>
          <p className="tagline">
            Plan, organize, and calculate your conference expenses with ease.
          </p>

          {/* Use Link instead of a regular button to navigate */}
          <Link to="/products">
            <button className="get-started">Get Started</button>
          </Link>
        </div>

        <div className="about-box">
          <h2>About Our Company</h2>
          <p>
            At <strong>EventEdge Solutions</strong>, we specialize in simplifying
            conference planning. From venue bookings and catering to managing
            logistics and budgets, our tools make event planning stress-free.
            With a focus on precision and efficiency, we help you host events
            that impress, without breaking the bank.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductSelection />} />
      </Routes>
    </BrowserRouter>
  );
}
