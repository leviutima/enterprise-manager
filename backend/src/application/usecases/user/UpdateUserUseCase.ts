import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";
import { UpdateUserDto } from "../../dtos/user/UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(id: string, data: UpdateUserDto): Promise<void> {
    const user = await this.userRepo.findById(id);

    if (!user) throw new Error("Usuário nao encontrado");

    const updateUser = { ...user, ...data };
    await this.userRepo.update(id, updateUser);
  }
}
