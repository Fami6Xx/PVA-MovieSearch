"use client";

import { Button } from "@heroui/button";
import { Card, CardFooter, Image } from "@heroui/react";
import { Input } from "@heroui/input";
import { useState } from "react";

const recommendedMovies = [
  { id: 1, title: "21 Jumpsims", tags: ["drama", "thriller"], image: "https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_.jpg" },
  { id: 2, title: "Don Pollo: Chicken Chase", tags: ["sci-fi", "drama"], image: "https://i1.sndcdn.com/artworks-HLlqmQQ3FERlTeGb-dHzC8A-t500x500.jpg" },
  { id: 3, title: "Lingan Gu 2", tags: ["sci-fi", "action"], image: "https://static.wikia.nocookie.net/085034e2-945f-48df-907c-8d2729b1d2d7/scale-to-width/755" },
  { id: 4, title: "Salamalejkum", tags: ["action", "drama"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAUXjHupbqlNVm0fwY6qjQoArgeWpuHFEJg&s" },
  { id: 5, title: "Deprese v kostce", tags: ["sci-fi", "action"], image: "https://cdn.britannica.com/32/261832-050-9E8BB966/Close-up-man-smoking-electronic-cigarette-vape-pen.jpg" }
];

export default function Home() {
  const [userTags, setUserTags] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const filteredMovies = recommendedMovies.filter((movie) =>
    userTags.length === 0 || movie.tags.some((tag) => userTags.includes(tag))
  );

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Doporučené filmy</h1>

      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Nastavení tagů</h2>
        <Input
          type="text"
          placeholder="Zadejte tagy, oddělené čárkou"
          onChange={(e) => setUserTags(e.target.value.split(",").map(tag => tag.trim()))}
        />
      </div>

      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Změna emailu</h2>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Nový email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button>Uložit</Button>
        </div>
      </div>

      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Změna hesla</h2>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Nové heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Uložit</Button>
        </div>
      </div>

      <div className="w-full max-w-4xl overflow-x-auto whitespace-nowrap flex space-x-4 py-4">
        {filteredMovies.map((movie) => (
          <Card key={movie.id} isFooterBlurred className="border-none relative" radius="lg" style={{ minWidth: "220px" }}>
            <Image
              alt={movie.title}
              className="object-cover"
              height={200}
              src={movie.image}
              width={200}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <p className="text-lg font-bold text-white p-2 bg-black rounded-lg">{movie.title}</p>
            </div>
            <CardFooter className="flex items-center justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 left-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}