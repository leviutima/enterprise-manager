import type { User } from "../../../domain/entities/User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<User | null>;
  update(user: User): Promise<User | null>;
  updatePassword(newPassword: string): Promise<User | null>;
  delete(id: string): Promise<void>;
}
