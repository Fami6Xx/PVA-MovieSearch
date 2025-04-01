"use client";

import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="form-container">
        <h2 className="form-heading">Vybrat</h2>

        <Button className="form-button" onPress={() => router.push("/")}>
          Všechny filmy
        </Button>

        <Button className="form-button mb-3" onPress={() => router.push("addFilm")}>
          Přidat film
        </Button>

        <Button className="form-button mb-3" onPress={() => router.push("changeEmail")}>
          Změna e-mailu
        </Button>

        <Button className="form-button" onPress={() => router.push("changePassword")}>
          Změna hesla
        </Button>
      </div>
    </div>
  );
}
