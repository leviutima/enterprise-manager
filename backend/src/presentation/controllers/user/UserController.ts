import { CreateUserUseCase } from "../../../application/usecases/user/CreateUserUseCase";
import { FindAllUsersUseCase } from "../../../application/usecases/user/FindAllUsersUseCase";
import { Request, Response } from "express";
import { FindByEmailUseCase } from "../../../application/usecases/user/FindByEmailUseCase";
import { UpdateUserUseCase } from "../../../application/usecases/user/UpdateUserUseCase";
import { User } from "../../../domain/entities/User";
import { UpdateUserDto } from "../../../application/dtos/user/UpdateUserDTO";
import { NewPasswordDTO } from "../../../application/dtos/user/NewPasswordDTO";
import { UpdatePasswordUseCase } from "../../../application/usecases/user/UpdatePasswordUseCase";
import { DeleteUserUseCase } from "../../../application/usecases/user/DeleteUserUseCase";

export class UserController {
  constructor(
    private findAllUsers: FindAllUsersUseCase,
    private createUser: CreateUserUseCase,
    private findByEmailUser: FindByEmailUseCase,
    private updateUser: UpdateUserUseCase,
    private updatePasswordUser: UpdatePasswordUseCase,
    private deleteUser: DeleteUserUseCase,
  ) {}

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.findAllUsers.execute();
      res.status(200).json(users);
    } catch (err: any) {
      res.status(500).json({ err: err.message });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      await this.createUser.execute(req.body);
      res.status(201).json({ message: "Usuário criado" });
    } catch (err: any) {
      console.error("[UserController.create]", err);
      res.status(500).json({ err: err.message });
    }
  }

  async findByEmail(req: Request, res: Response) {
    try {
      const { email } = req.params;
      if (!email) {
        res
          .status(404)
          .json({ message: "Usuário com esse email não encontrado" });
      }

      const user = await this.findByEmailUser.execute(email as string);

      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
      }

      res.status(200).json(user);
    } catch (err: any) {
      res.status(500).json({ err: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: UpdateUserDto = req.body;

      if (!id) {
        res.status(400).json({ message: "Id vazio" });
        return;
      }

      await this.updateUser.execute(id as string, data);
      res.status(200).json({ message: "Usuário atualizado" });
    } catch (err: any) {
      res.status(500).json({ err: err.message });
    }
  }

  async updatePassword(req: Request, res: Response) {
    const { id } = req.params;
    const newPassword: NewPasswordDTO = req.body;

    if (!id) {
      res.status(400).json({ message: "Id não identificado" });
      return;
    }
    await this.updatePasswordUser.execute(id as string, newPassword);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Usuário não identificado" });
    }

    await this.deleteUser.execute(id as string);
  }
}
