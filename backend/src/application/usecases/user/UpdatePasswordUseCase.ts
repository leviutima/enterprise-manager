import { hash } from "bcrypt";
import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";
import { NewPasswordDTO } from "../../dtos/user/NewPasswordDTO";

export class UpdatePasswordUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(id: string, data: NewPasswordDTO): Promise<void> {
    const user = await this.userRepo.findById(id);

    if (!user) throw new Error("Usuário não encontrado");

    const hashedPassword = await hash(data.newPassword, 10);
    await this.userRepo.updatePassword(id, hashedPassword);
  }
}
