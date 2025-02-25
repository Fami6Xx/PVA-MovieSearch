"use client";

import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Login()
{
const router = useRouter();

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Registrace</h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Váš e-mail:</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Vaše heslo:</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          />
        </div>

        <Button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
        onPress={() => router.push("/")}>
          Přihlásit se
        </Button>

        <Button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
        onPress={() => router.push("register")}>
          Registrovat se
        </Button>

        <Button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition" 
        onPress={() => router.push("changeEmail")}>
          Změna e-mailu
        </Button>

        <Button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition" 
        onPress={() => router.push("changePassword")}>
          Změna hesla
        </Button>
      </div>
    </div>
);
}