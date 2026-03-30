import { Address } from "./Address";
import { Sector } from "./Sector";
import { User } from "./User";

export class Enterprise {
  private tradeName: string;
  private corporateName: string;
  private cnpj: string;
  private employee: User[];
  private sector: Sector[]
  private address?: Address;


  constructor(
    tradeName: string,
    corporateName: string,
    cnpj: string,
    sector: Sector[],
    employee?: User[] | null,
    address?: Address,
  ) {
    this.tradeName = tradeName;
    this.corporateName = corporateName;
    this.cnpj = cnpj;
    this.sector = sector
    this.employee = employee ?? [];
    this.address = address;
  }

  get getTradeName() {
    return this.tradeName;
  }
  set setTradeName(value: string) {
    if (!value) throw new Error("Nome fantasia é obrigatório");
    this.tradeName = value;
  }

  get getCorporateName() {
    return this.corporateName;
  }
  set setCorporateName(value: string) {
    if (!value) throw new Error("Razão social é obrigatório");
    this.corporateName = value;
  }

  get getCnpj() {
    return this.cnpj;
  }
  set setCnpj(value: string) {
    if (!value) throw new Error("Cnpj é obrigatório");
    this.cnpj = value;
  }

  get getEmployee() {
    if (!this.employee) return [];
    return this.employee;
  }
  set setEmployee(value: User[]) {
    this.employee = value;
  }

  get getSector() {
    if(!this.sector) return []
    return this.sector
  }
  set setSector(value: Sector[]) {
    this.sector = value
  }

  get getAddress() {
    if(!this.address) return []
    return this.address
  }
  set setAddress(value: Address) {
    this.address = value
  }
  
}
