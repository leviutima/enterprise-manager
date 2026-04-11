import { CreateUserUseCase } from "../../../application/usecases/user/CreateUserUseCase";
import { FindAllUsersUseCase } from "../../../application/usecases/user/FindAllUsersUseCase";
import { Request, response, Response } from "express";
import { FindByEmailUseCase } from "../../../application/usecases/user/FindByEmailUseCase";

export class UserController {
  constructor(
    private findAllUsers: FindAllUsersUseCase,
    private createUser: CreateUserUseCase,
    private findByEmailUser: FindByEmailUseCase,
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
        await this.createUser.execute(req.body)
        res.status(201).json({message: "Usuário criado"})
    } catch (err: any) {
      response.status(500).json({ err: err.message });
    }
  }

  async findByEmail(req: Request, res: Response) {
    try {
    const {email} = req.params
      if(!email) {
        res.status(404).json({message: "Usuário com esse email não encontrado"})
      }

      const user = await this.findByEmailUser.execute(email as string)

      if(!user) {
        res.status(404).json({message: "Usuário não encontrado"})
      }
      
      res.status(200).json(user)
    } catch(err: any) {
      res.status(500).json({err: err.message})
    }
  }
}
