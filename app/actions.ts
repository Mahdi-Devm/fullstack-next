"use server";

import { z } from "zod";
import CreateUsers from "../lib/CreateUser/CreateUser";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3),
});

export default async function createUser(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  await CreateUsers({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    username: validatedFields.data.username,
  });
  return {
    message: "User created successfully!",
  };
}
