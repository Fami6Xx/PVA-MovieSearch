import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { title, image, tags } = await req.json();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
      );
    }

    // Ověření, zda jsou `title` a `image` poskytnuty
    if (!title || !image) {
      return NextResponse.json(
        { error: "Title and image are required" },
        { status: 400 }
      );
    }

    // Vytvoření filmu
    const movie = await prisma.movie.create({
      data: {
        title,
        image,
        tags: {
          create: tags?.map((tagName: string) => ({
            tag: {
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return NextResponse.json(movie, { status: 201 });
  } catch (error) {
    console.error("Error creating movie:", error);
    return NextResponse.json(
      { error: "Failed to create movie" },
      { status: 500 }
    );
  }
}