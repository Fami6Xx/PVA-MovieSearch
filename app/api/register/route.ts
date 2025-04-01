import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { email, password, name } = body;

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: "Email and password are required" }),
                { status: 400 }
            );
        }

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new Response(
                JSON.stringify({ error: "User already exists" }),
                { status: 400 }
            );
        }

        // Hash the password with a salt round of 10
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await prisma.user.create({
            data: {
                email,
                name: name || null,
                password: hashedPassword,
            },
        });

        return new Response(
            JSON.stringify({
                message: "User registered successfully",
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    name: newUser.name,
                },
            }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        );
    }
};
