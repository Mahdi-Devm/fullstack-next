import prisma from "../db";
import jwt from "jsonwebtoken";

interface CreateUserParams {
  password: string;
  email: string;
  username: string;
}
type PrismaError = {
  code: string;
  message: string;
};

export default async function CreateUsers({
  password,
  email,
  username,
}: CreateUserParams) {
  try {
    const user = await prisma.user.create({
      data: { password, email, username },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    return { user, token };
  } catch (error: unknown) {
    const err = error as PrismaError;

    if (err.code === "P2002") {
      return { error: "Email already registered" };
    }

    return { error: "Something went wrong" };
  }
}
