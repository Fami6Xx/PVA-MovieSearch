"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import Image from "next/image";

export default function AddFilm() {
  const router = useRouter();
  const [movieName, setMovieName] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAddFilm = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-white min-h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Přidat film</h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Jméno filmu:</label>
          <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white" placeholder="Zadejte jméno filmu"/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Obrázek:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"/>
        </div>

        {image && (
          <div className="mb-4 flex justify-center">
            <Image src={image} alt="Preview" width={300} height={200} className="border border-gray-300 rounded-md"/>
          </div>
        )}

        <Button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
          onPress={handleAddFilm}> Přidat film
        </Button>

        <Button className="w-full py-2 mt-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
          onPress={() => router.push("/")}> Všechny filmy
        </Button>
      </div>
    </div>
  );
}