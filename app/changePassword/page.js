"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Change() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Změna hesla</h2>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Nové heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onPress={() => router.push("login")}>Uložit</Button>
        </div>

        <Button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition" 
        onPress={() => router.push("login")}>
          Zpět
        </Button>
      </div>
    </div>
  );
}
