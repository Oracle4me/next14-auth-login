import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    const idUser = await db.user.findUnique({ where: { id } });
    return idUser;
  } catch (err) {
    console.log(err);
    return null;
  }
};
