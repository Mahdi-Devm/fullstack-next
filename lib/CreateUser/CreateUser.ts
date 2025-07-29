"use server";
import { cookies } from "next/headers";
import prisma from "../db";
import jwt from "jsonwebtoken";
interface CreateUserParams {
  password: string;
  email: string;
  username: string;
}

export default async function CreateUsers({
  password,
  email,
  username,
}: CreateUserParams) {
  const user = await prisma.user.create({
    data: {
      password,
      email,
      username,
    },
  });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
    }
  );
  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  return user;
}
