import { Request, Response } from "express";
import { LoginUseCase } from "../../../application/usecases/auth/LoginUseCase";
import { SignUpUseCase } from "../../../application/usecases/auth/SignUpUseCase";

export class AuthController {
  constructor(
    private loginUseCase: LoginUseCase,
    private signUpUseCase: SignUpUseCase,
  ) {}

  async login(res: Response, req: Request) {
    try {
      const { email, password } = req.body;
      const token = await this.loginUseCase.execute(email, password);
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development",
        sameSite: "none",
      });
      res.status(200).json({ message: "Login realizado com sucesso" });
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  }

  async signUp(req: Request, res: Response): Promise<void> {
    try {
      await this.signUpUseCase.execute(req.body);
      res.status(201).json({ message: "Usuário criado" });
    } catch (err: any) {
      console.error("[UserController.create]", err);
      res.status(500).json({ err: err.message });
    }
  }

  async logout(res: Response) {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout realizado" });
  }
}
