"use server";

import { z } from "zod";
import CreateUsers from "../lib/CreateUser/CreateUser";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3),
});

export default async function createUser(prev: unknown, formData: FormData) {
  const parsed = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
  });

  if (!parsed.success) {
    return {
      error: true,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const result = await CreateUsers(parsed.data);

  if ("error" in result) {
    return {
      error: true,
      errors: {
        email: [result.error],
      },
    };
  }

  return {
    error: false,
    message: "User created successfully!",
    user: result,
  };
}
