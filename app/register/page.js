"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="form-container">
        <h2 className="form-heading">Registrace</h2>

        <div className="mb-4">
          <label className="form-label">Váš e-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"form-input"}
          />
        </div>

        <div className="mb-6">
          <label className="form-label">Vaše heslo:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input border-gray-300 focus:ring-blue-500"
          />
        </div>

        <Button
          className="form-button"
          onPress={() => router.push("login")}
        >
          Registrovat se
        </Button>

        <Button className="alt-button" onPress={() => router.push("login")}>
          Máte účet? Přihlásit se
        </Button>
      </div>
    </div>
  );
}
