import { User } from "@/src/entities/user/model/user";
import { client } from "@/src/shared/config/client";

export const createUser = async (user: User) => {
  try {
    const res = await client.post("/users", user);
    return res.data;
  } catch (err: any) {
    console.error("Erro ao criar usuário");
  }
};
