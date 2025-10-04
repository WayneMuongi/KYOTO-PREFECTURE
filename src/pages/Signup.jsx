// src/pages/Signup.jsx
import React from "react";

export default function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Sign Up to Explore Kyoto</h1>
      <p>Join us to discover the beauty, history, and culture of Kyoto Prefecture.</p>
      
      <form style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Full Name" style={{ padding: "10px", margin: "5px" }} /><br />
        <input type="email" placeholder="Email Address" style={{ padding: "10px", margin: "5px" }} /><br />
        <input type="password" placeholder="Password" style={{ padding: "10px", margin: "5px" }} /><br />
        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px" }}>Sign Up</button>
      </form>
    </div>
  );
}
