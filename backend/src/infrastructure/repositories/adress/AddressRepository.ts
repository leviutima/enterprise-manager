import { Address } from "../../../domain/entities/Address";
import { pool } from "../../database/db";
import { AddressMapper } from "../../mapper/addressMapper/addressMapper";
import { IAddressRepository } from "./IAddressRepository";

export class AddressRepository implements IAddressRepository {

  async findAddressUser(id: string): Promise<Address | null> {
    const { rows } = await pool.query(`SELECT * FROM addresses WHERE id = $1`, [
      id,
    ]);
    if(!rows[0]) return null;
    return AddressMapper.toDomain(rows)
  }

  async createAddress(address: Address): Promise<void> {
    await pool.query(
      `INSERT INTO addresses 
      (id, zip_code, street, city, state, number, complement, neighborhood)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        address.id,
        address.zipcode,
        address.street,
        address.city,
        address.state,
        address.number,
        address.complement,
        address.neighborhood,
      ],
    );
  }
}
