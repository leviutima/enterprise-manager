import { Request, Response } from "express";
import { LoginUseCase } from "../../../application/usecases/auth/LoginUseCase";

export class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

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

  async logout(res: Response) {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout realizado" });
  }
}
