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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Registrace</h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Váš e-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full border p-2 rounded-md focus:ring-2 focus:outline-none bg-white ${
              email && !isValidEmail ? "border-red-500 ring-red-300" : "border-gray-300 focus:ring-blue-500"}`}/>
          {email && !isValidEmail && (
            <p className="text-red-500 text-sm mt-1">Neplatný e-mailový formát</p>)}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Vaše heslo:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"/>
        </div>

        <Button
          className={`w-full py-2 rounded-md transition ${
            isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
          onPress={() => router.push("addFilm")}
          disabled={isDisabled}>
          Registrovat se
        </Button>

        <Button
          className="w-full py-2 mt-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
          onPress={() => router.push("login")}>
          Máte účet? Přihlásit se
        </Button>
      </div>
    </div>
  );
}
