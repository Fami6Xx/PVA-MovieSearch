"use client";

import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="form-container">
        <h2 className="form-heading">Přihlášení</h2>

        <div className="mb-4">
          <label className="form-label">Váš e-mail:</label>
          <input type="email" className="form-input" />
        </div>

        <div className="mb-6">
          <label className="form-label">Vaše heslo:</label>
          <input type="password" className="form-input" />
        </div>

        <Button className="form-button mb-3" onPress={() => router.push("changeDialog")}>
          Přihlásit se
        </Button>

        <Button className="mb-3 alt-button" onPress={() => router.push("forgotPassword")}>
          Zapomenuté heslo
        </Button>
      </div>
    </div>
  );
}