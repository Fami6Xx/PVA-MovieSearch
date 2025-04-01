import { NextResponse } from "next/server";
import {getServerSession} from "next-auth/next";

export async function POST() {
  try {
    // Zrušení session odstraněním cookies
    const response = NextResponse.json({ message: "Logged out successfully" });
    response.cookies.set("next-auth.session-token", "", { maxAge: 0 });
    response.cookies.set("next-auth.csrf-token", "", { maxAge: 0 });

    return response;
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.json(
      { error: "Failed to logout" },
      { status: 500 }
    );
  }
}