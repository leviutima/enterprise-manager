import { User } from "./User";

export class Position {
  private name: string;
  private employeesId: User[]; //array de id de funcionários

  constructor(name: string, employeesId: User[]) {
    ((this.name = name), (this.employeesId = employeesId));
  }

  get getName() {
    return this.name;
  }
  set setName(value: string) {
    this.name = value;
  }

  get getEmployees() {
    return this.employeesId
  }
  set setEmployees(value: User[]) {
    this.employeesId = value
  }
}
