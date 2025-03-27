import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const movies = await prisma.movie.findMany({
      include: {
        tags: {
          include: {
            tag: true, // Načte informace o tagu z tabulky `Tag`
          },
        },
      },
    });

    // Transformace dat pro lepší čitelnost
    const transformedMovies = movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.image,
      tags: movie.tags.map((movieTag) => movieTag.tag.name), // Extrahuje názvy tagů
      createdAt: movie.createdAt,
      updatedAt: movie.updatedAt,
    }));

    return NextResponse.json(transformedMovies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}