"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import Image from "next/image";

export default function AddFilm() {
  const router = useRouter();
  const [movieName, setMovieName] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAddFilm = () => {
    window.location.reload();
  };

  const removeImage = () => {
    if (image) {
      setImage(null);
      if(fileInputRef.current)
      {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="form-container">
        <h2 className="form-heading">Přidat film</h2>

        <div className="mb-4">
          <label className="form-label">Jméno filmu:</label>
          <input
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            className="form-input border-gray-300 focus:ring-blue-500"
            placeholder="Zadejte jméno filmu"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Obrázek:</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="form-input border-gray-300 focus:ring-blue-500"
          />
        </div>

        {image && (
          <div className="mb-4 flex justify-center">
            <Image
              src={image}
              alt="Preview"
              width={300}
              height={200}
              className="image-preview"
            />
          </div>
        )}

        {image && (
        <Button className="remove-button" onPress={removeImage}>
          Odebrat obrázek
        </Button>
        )}

        <Button className="form-button active-button" onPress={handleAddFilm}>
          Přidat film
        </Button>

        <Button className="alt-button" onPress={() => router.push("/")}>
          Všechny filmy
        </Button>
      </div>
    </div>
  );
}
