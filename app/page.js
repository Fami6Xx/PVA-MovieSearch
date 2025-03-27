"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { Card, Image } from "@heroui/react";
import { Input } from "@heroui/input";
import { useState } from "react";
import { px } from "framer-motion";

const recommendedMovies = [
  { id: 1, title: "21 Jumpsims", tags: ["drama", "thriller"], image: "https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_.jpg" },
  { id: 2, title: "Don Pollo: Chicken Chase", tags: ["sci-fi", "drama"], image: "https://i1.sndcdn.com/artworks-HLlqmQQ3FERlTeGb-dHzC8A-t500x500.jpg" },
  { id: 3, title: "Lingan Gu 2", tags: ["sci-fi", "action"], image: "https://static.wikia.nocookie.net/085034e2-945f-48df-907c-8d2729b1d2d7/scale-to-width/755" },
  { id: 4, title: "Salamalejkum", tags: ["action", "drama"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAUXjHupbqlNVm0fwY6qjQoArgeWpuHFEJg&s" },
  { id: 5, title: "Deprese v kostce", tags: ["sci-fi", "action"], image: "https://cdn.britannica.com/32/261832-050-9E8BB966/Close-up-man-smoking-electronic-cigarette-vape-pen.jpg" },
  { id: 6, title: "Tralalero tralala", tags: ["horror"], image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg" },
  { id: 7, title: "Soro", tags: ["action", "sci-fi"], image: "https://cdn1.staticpanvel.com.br/produtos/15/111547-15.jpg?ims=424x" },
  { id: 8, title: "Number Floor", tags: ["horror", "comedy"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_TmUZFiobCsnSqyAloIuRQRSY7kG19mnSg&s" },
  { id: 9, title: "Sushi Sam:Comeback", tags: ["action"], image: "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/6e4118ce-4984-4344-9249-51c2b08c6100/avatarhd" }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();


  const filteredMovies = recommendedMovies.filter((movie) =>
    searchTerm === "" ||
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-center flex-1">Doporučené filmy</h1>
        <Button
          size="md"
          color="primary"
          variant="solid"
          className="ml-6" // Zvýšený margin-left
          onPress={() => router.push("addFilm")} // Přesměrování na jinou stránku
        >
          Přidat film
        </Button>
      </div>

      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Vyhledávání</h2>
        <Input
          type="text"
          placeholder="Zadejte název filmu nebo žánr"
          onChange={(e) => setSearchTerm(e.target.value.trim())}
          style={{ color: "white" }}
        />
      </div>

      <div className="flex-container">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="card-container">
            <p className="text-lg font-bold text-white bg-black px-2 py-1 rounded">{movie.title}</p>
            <Card className="border-none relative hover-card" radius="lg" style={{ minWidth: "220px" }}>
              <Image
                alt={movie.title}
                className="object-cover"
                height={200}
                src={movie.image}
                width={200}
              />
              <div className="hover-button">
                <Button size="lg" color="default" variant="solid">
                  <img width={40} src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"></img>
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <style jsx>{`
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          padding: 10px;
        }

        .card-container {
          margin: 10px;
          text-align: center;
          position: relative;
        }

        .hover-card {
          position: relative;
          overflow: hidden;
        }

        .hover-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          pointer-events: none; /* Zabrání kliknutí, když není viditelné */
        }

        .card-container:hover .hover-button {
          opacity: 1;
          pointer-events: auto; /* Umožní interakci, když je viditelné */
        }
      `}</style>
    </div>
  );
}
