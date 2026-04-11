import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";
import { UserOutputDTO } from "../../dtos/user/UserOutputDTO";

export class FindByIdUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(id: string): Promise<UserOutputDTO> {
    const user = await this.userRepo.findById(id);

    if (!user) throw new Error("Usuário não encontrado");

    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      brithDate: user.birthDate,
      email: user.email,
      cpf: user.cpf,
      enterpriseId: user.enterpriseId || undefined,
      sectorId: user.sectorId || undefined,
      role: user.role,
      address: user.address,
    };
  }
}
