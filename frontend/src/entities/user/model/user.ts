import { Address } from "../../address/model/address";
import { Role } from "./role";

export interface User {
  name: string;
  surname: string;
  email: string;
  birthDate: Date;
  cpf: string;
  phone: string;
  address: Address;
  enterpriseId?: string;
  role: Role;
  sectorId: string;
  active: boolean;
  deletedAt: Date;
}
