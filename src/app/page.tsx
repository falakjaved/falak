"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    setMsg(data.message || data.error);

    // Clear inputs
    setName("");
    setEmail("");
  };

  return (
    <div className="home-container">
      <img src="/arty.jpeg" alt="Intro" />
      <h2>Welcome to My Intro Page</h2>
      <p>This is a simple animated intro page with hover effects.</p>

      {/* Contact Form */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}
