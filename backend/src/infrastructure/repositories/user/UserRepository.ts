import type { User } from "../../../domain/entities/User";
import { pool } from "../../database/db";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {

    async findAll(): Promise<User[]> {
        const result  = await pool.query("SELECT * FROM users")
    }
}
