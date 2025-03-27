import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, movieId } = await req.json();

    // Ověření, zda jsou `userId` a `movieId` poskytnuty
    if (!userId || !movieId) {
      return NextResponse.json(
        { error: "userId and movieId are required" },
        { status: 400 }
      );
    }

    // Přidání do tabulky FavoriteMovie
    const favorite = await prisma.favoriteMovie.create({
      data: {
        userId,
        movieId,
      },
    });

    return NextResponse.json(favorite, { status: 201 });
  } catch (error) {
    console.error("Error adding favorite movie:", error);
    return NextResponse.json(
      { error: "Failed to add favorite movie" },
      { status: 500 }
    );
  }
}