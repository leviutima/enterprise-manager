import { Position } from "./Position";

export class Sector {
  private name: string;
  private position?: Position[];
  private description?: string;

  constructor(name: string, position?: Position[], description?: string) {
    ((this.name = name),
      (this.description = description),
      (this.position = position));
  }

  get getName() {
    return this.name;
  }
  set setName(value: string) {
    if (!value) throw new Error("Nome do setor é obrigatório");
    this.name = value;
  }

  get getDescription() {
    return this.description;
  }
  set setDescription(value: string) {
    this.description = value;
  }

  get getPosition() {
    if (!this.position) return [];
    return this.position;
  }
  set setPosition(value: Position[]) {
    this.position = value;
  }
}
