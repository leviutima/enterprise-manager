import { Address } from "./Address";
import { Sector } from "./Sector";
import { User } from "./User";

export class Enterprise {
  public _tradeName: string;
  public _corporateName: string;
  public _cnpj: string;
  public _sector: Sector[];
  public _employees?: User[];
  public _address?: Address;

  constructor(
    tradeName: string,
    corporateName: string,
    cnpj: string,
    sector: Sector[],
    employees?: User[] | null,
    address?: Address,
  ) {
    this._tradeName = tradeName;
    this._corporateName = corporateName;
    this._cnpj = cnpj;
    this._sector = sector;
    this._employees = employees ?? [];
    this._address = address;
  }

  get tradeName() {
    return this._tradeName;
  }

  get corporateName() {
    return this._corporateName;
  }

  get cnpj() {
    return this._cnpj;
  }

  get sector() {
    return this._sector;
  }

  get employees() {
    return this._employees;
  }

  get address() {
    return this._address;
  }
}
