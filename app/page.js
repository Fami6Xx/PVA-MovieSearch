"use client";

import { Button } from "@heroui/button";
import { px } from "framer-motion";
import { useState } from "react";

const recommendedMovies = [
  { id: 1, title: "21 Jumpsims", tags: ["drama", "thriller"] },
  { id: 2, title: "Don Pollo:Chicken chase", tags: ["sci-fi", "drama"] },
  { id: 3, title: "Lingan Gu 2", tags: ["sci-fi", "action"] },
  { id: 4, title: "Salamalejkum", tags: ["action", "drama"] },
  { id: 5, title: "Deprese v kostce", tags: ["sci-fi", "action"]}
];

export default function Home() {
  const [userTags, setUserTags] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const filteredMovies = recommendedMovies.filter((movie) =>
    userTags.length === 0 || movie.tags.some((tag) => userTags.includes(tag))
  );

  return (
    <div>
      <h1>Doporučené filmy</h1>

      {/* Nastavení preferovaných tagů */}
      <div>
        <h2>Nastavení tagů</h2>
        <input
          type="text"
          placeholder="Zadejte tagy, oddělené čárkou"
          onChange={(e) => setUserTags(e.target.value.split(",").map(tag => tag.trim()))}
          style={{ width: "300px" }}
        />
      </div>

      {/* Změna emailu */}
      <div>
        <h2>Změna emailu</h2>
        <input
          type="email"
          placeholder="Nový email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button style={{ marginLeft: "10px" }}>Uložit email</Button>
      </div>

      {/* Změna hesla */}
      <div>
        <h2>Změna hesla</h2>
        <input
          type="password"
          placeholder="Nové heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={{ marginLeft: "10px" }}>Uložit heslo</Button>
      </div>

      {/* Zobrazení doporučených filmů */}
      {filteredMovies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: "10px" }}>
          <span>{movie.title}</span>
          <Button style={{ marginLeft: "10px" }}>Zobrazit</Button>
        </div>
      ))}
    </div>
  );
}
