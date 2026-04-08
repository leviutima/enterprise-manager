import bcrypt from "bcrypt";
import { IUserRepository } from "../../../infrastructure/repositories/user/IUserRepository";
import { CreateUserDto } from "../../dtos/user/CreateUserDTO";
import { User } from "../../../domain/entities/User";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async execute(input: CreateUserDto): Promise<void> {
    const userExist = await this.userRepo.findByEmail(input.email);
    if (userExist) throw new Error("Email já cadastrado");

    const hashPassword = await bcrypt.hash(input.password, 10);

    const user = new User(
      crypto.randomUUID(),
      input.name,
      input.surname,
      input.email,
      hashPassword,
      input.birthDate,
      input.cpf,
      input.address,
      input.role,
      input.sectorId,
      input.enterpriseId, 
    );

    await this.userRepo.create(user)
  }
}
