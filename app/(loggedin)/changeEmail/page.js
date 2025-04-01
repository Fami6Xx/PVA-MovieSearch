"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Change() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Změna e-mailu</h2>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Nový e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="change-input"
          />
          <Button className="save-button" onPress={() => router.push("changeDialog")}>Uložit</Button>
        </div>

        <Button className="w-full py-2 text-white rounded-md transition back-button" 
        onPress={() => router.push("changeDialog")}>
          Zpět
        </Button>
      </div>
    </div>
  );
}
