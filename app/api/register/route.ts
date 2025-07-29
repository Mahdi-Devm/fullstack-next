import { z } from "zod";
import CreateUsers from "../../../lib/CreateUser/CreateUser";
import { NextResponse } from "next/server";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const { user, token, error } = await CreateUsers(parsed.data);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    if (!token) {
      return NextResponse.json(
        { error: "Token generation failed" },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      user,
      message: "User created successfully!",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
