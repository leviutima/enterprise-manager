import { Router } from "express";
import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";
import { AuthController } from "../../controllers/auth/LoginController";
import { LoginUseCase } from "../../../application/usecases/auth/LoginUseCase";

const router = Router();
const userRepo = new UserRepository();

const authController = new AuthController(new LoginUseCase(userRepo));

router.post("/auth/login", (req, res) => authController.login(res, req));
router.post("/auth/logout", (req, res) => authController.logout(res));

export { router as authRouter };
