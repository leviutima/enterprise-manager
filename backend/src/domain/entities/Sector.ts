import { Position } from "./Position";

export class Sector {
  public _id: string;
  public _name: string;
  public _position?: Position[];
  public _description?: string;

  constructor(
    id: string,
    name: string,
    position?: Position[],
    description?: string,
  ) {
    ((this._id = id),
      (this._name = name),
      (this._description = description),
      (this._position = position));
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get position() {
    return this._position;
  }

  get description() {
    return this._description;
  }
}
