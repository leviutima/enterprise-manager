import type { User } from "../../../domain/entities/User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  updatePassword(id: string, hashedPassword: string): Promise<void>;
  delete(id: string): Promise<void>;
}
