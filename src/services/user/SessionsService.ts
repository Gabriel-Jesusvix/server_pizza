import { compare } from "bcryptjs";
import { prisma } from "../../prisma";
import { sign } from "jsonwebtoken";
type SessionRequest = {
  email: string;
  password: string;
};

export class SessionsService {
  async execute({ email, password }: SessionRequest) {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("User/password incorrect");
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_HASH_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}
