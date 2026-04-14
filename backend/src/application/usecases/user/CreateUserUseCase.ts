import bcrypt from "bcrypt";
import { IUserRepository } from "../../../infrastructure/repositories/user/IUserRepository";
import { CreateUserDto } from "../../dtos/user/CreateUserDTO";
import { User } from "../../../domain/entities/User";
import { Address } from "../../../domain/entities/Address";
import { AddressRepository } from "../../../infrastructure/repositories/adress/AddressRepository";

export class CreateUserUseCase {
  constructor(
    private userRepo: IUserRepository,
    private addressRepo: AddressRepository,
  ) {}

  async execute(input: CreateUserDto): Promise<void> {
    const userExist = await this.userRepo.findByEmail(input.email);
    if (userExist) throw new Error("Email já cadastrado");

    const hashPassword = await bcrypt.hash(input.password, 10);

    const address = new Address(
      crypto.randomUUID(),
      input.address.zipcode,
      input.address.street,
      input.address.city,
      input.address.state,
      input.address.number,
      input.address.complement,
      input.address.neighborhood,
    );

    await this.addressRepo.createAddress(address);

    const user = new User(
      crypto.randomUUID(),
      input.name,
      input.surname,
      input.email,
      hashPassword,
      input.birthDate,
      input.cpf,
      input.phone,
      address,
      input.role,
      input.active,
      input.deletedAt,
      input.sectorId,
      input.enterpriseId,
    );

    await this.userRepo.create(user);
  }
}
