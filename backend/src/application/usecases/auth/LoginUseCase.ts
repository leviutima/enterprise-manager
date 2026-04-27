import jwt from "jsonwebtoken";
import { IUserRepository } from "../../../infrastructure/repositories/user/IUserRepository";
import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";

export class LoginUseCase {
  constructor(private userRepo: IUserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);

    if (!user) throw new Error("Credenciais inválidas");

    const matchPassword = await user.comparePassword(password);

    if (!matchPassword) {
      throw new Error("Credenciais inválidas");
    }

    const token = jwt.sign(
      { sub: user.id, role: user.role },
      process.env.JWT_SECRET!,
    );
    return token;
  }
}
