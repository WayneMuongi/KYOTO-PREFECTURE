// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>Welcome to Kyoto Prefecture</h1>
        <p>Discover Japan’s timeless beauty — temples, tradition, and tranquility.</p>
        <button onClick={() => navigate("/signup")}>Explore Kyoto</button>
      </header>

      <section className="highlights">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad" alt="Kinkaku-ji" />
          <h3>Kinkaku-ji Temple</h3>
          <p>The Golden Pavilion — a stunning symbol of Kyoto’s elegance.</p>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1549693578-d683be217e58" alt="Arashiyama Bamboo Grove" />
          <h3>Arashiyama Bamboo Grove</h3>
          <p>Walk through a world of green serenity.</p>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c" alt="Fushimi Inari" />
          <h3>Fushimi Inari Shrine</h3>
          <p>Experience the thousand torii gates of Kyoto’s most iconic shrine.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 Visit Kyoto Prefecture. All rights reserved.</p>
      </footer>
    </div>
  );
}
