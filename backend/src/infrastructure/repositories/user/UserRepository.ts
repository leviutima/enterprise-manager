import { User } from "../../../domain/entities/User";
import { pool } from "../../database/db";
import { UserMapper } from "../../mapper/userMapper/userMapper";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
    
  async findAll(): Promise<User[]> {
    const { rows } = await pool.query("SELECT * FROM  users");
    return rows.map((row) => UserMapper.toDomain(row));
  }

  async findById(id: string): Promise<User | null> {
    const { rows } = await pool.query("SELECT * FROM  users WHERE id = $1", [
      id,
    ]);
    if (!rows[0]) return null;
    return UserMapper.toDomain(rows[0]);
  }

  async findByEmail(email: string): Promise<User | null> {
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (!rows[0]) return null;
    return UserMapper.toDomain(rows[0]);
  }

  async create(user: User): Promise<void> {
    await pool.query(
      `INSERT INTO users 
      (name, surname, email, password, birth_date, cpf, enterprise_id, role, sector_id) 
       VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)`,
      [
        user.name,
        user.surname,
        user.email,
        user.password,
        user.birthDate,
        user.cpf,
        user.enterpriseId,
        user.role,
        user.sectorId,
      ],
    );
  }

  async update(user: User): Promise<void> {
    await pool.query(
      `UPDATE users 
     SET name = $1, surname = $2, email = $3, birth_date = $4, 
         cpf = $5, enterprise_id = $6, role = $7, sector_id = $8
     WHERE id = $9`,
      [
        user.name,
        user.surname,
        user.email,
        user.birthDate,
        user.cpf,
        user.enterpriseId,
        user.role,
        user.sectorId,
        user.id,
      ],
    );
  }

  async updatePassword(id: string, hashedPassword: string): Promise<void> {
    await pool.query("UPDATE users SET password = $1 WHERE id = $2", [
      hashedPassword,
      id,
    ]);
  }

  async delete(id: string): Promise<void> {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
  }
}
