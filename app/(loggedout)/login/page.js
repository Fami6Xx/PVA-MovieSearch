"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Neplatné přihlašovací údaje");
    } else {
      // Redirect to your desired page after successful login
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="form-container">
        <h2 className="form-heading">Přihlášení</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="form-label">Váš e-mail:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="form-label">Vaše heslo:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button className="form-button mb-3" onPress={handleLogin}>
          Přihlásit se
        </Button>

        <Button
          className="mb-3 alt-button"
          onPress={() => router.push("/register")}
        >
          Registrace
        </Button>
      </div>
    </div>
  );
}
