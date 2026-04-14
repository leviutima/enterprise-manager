import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../infrastructure/repositories/user/IUserRepository";
import { UserOutputDTO } from "../../dtos/user/UserOutputDTO";

export class FindAllUsersUseCase {
  constructor(private userRepo: IUserRepository) {}

  async execute(): Promise<UserOutputDTO[]> {
    const users = await this.userRepo.findAll();
    return users.map((u) => ({
      id: u.id,
      name: u.name,
      surname: u.surname,
      email: u.email,
      brithDate: u.birthDate,
      cpf: u.cpf,
      phone: u.phone,
      address: u.address || "",
      enterpriseId: u.enterpriseId || "" ,
      role: u.role,
      sectorId: typeof u.sectorId || "",
    }));
  }
}
