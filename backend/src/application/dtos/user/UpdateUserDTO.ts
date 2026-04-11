import { Address } from "../../../domain/entities/Address";
import { Role } from "../../../domain/types/UserTypes";

export interface UpdateUserDto {
  name: string;
  surname: string;
  email: string;
  password: string;
  birthDate: Date;
  cpf: string;
  address: Address,
  enterpriseId: string,
  role: Role,
  sectorId: string,
}