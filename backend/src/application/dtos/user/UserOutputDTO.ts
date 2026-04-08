import { Address } from "../../../domain/entities/Address";
import { Role } from "../../../domain/types/UserTypes";

export interface UserOutputDTO {
  id: string;
  name: string;
  surname: string;
  email: string;
  brithDate: Date;
  cpf: string;
  address: Address,
  enterpriseId: string,
  role: Role,
  sectorId: string,
}
