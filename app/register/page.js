"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isDisabled = !isValidEmail || password.length < 6;

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
            className={`form-input ${email && !isValidEmail ? "invalid-email" : "border-gray-300 focus:ring-blue-500"}`}
          />
          {email && !isValidEmail && (
            <p className="text-red-500 text-sm mt-1">Neplatný e-mailový formát</p>
          )}
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
          className={`form-button ${isDisabled ? "disabled-button" : "active-button"}`}
          onPress={() => router.push("login")}
          disabled={isDisabled}
        >
          Registrovat se
        </Button>

        <Button className="alt-button bttn" onPress={() => router.push("login")}>
          Máte účet? Přihlásit se
        </Button>
      </div>
    </div>
  );
}
