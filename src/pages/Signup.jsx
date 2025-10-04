// src/pages/Signup.jsx
import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="signup-container">
      <div className="overlay">
        <div className="signup-card">
          <h1>Sign Up to Explore Kyoto</h1>
          <p>Join us to discover the beauty, history, and culture of Kyoto Prefecture.</p>

          <form className="signup-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button
              type="submit"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={hovered ? "hovered" : ""}
            >
              {hovered ? "✨ Let’s Go! ✨" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
