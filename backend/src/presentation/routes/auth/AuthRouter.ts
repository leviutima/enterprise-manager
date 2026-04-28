import { Router } from "express";
import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";
import { AddressRepository } from "../../../infrastructure/repositories/adress/AddressRepository";
import { AuthController } from "../../controllers/auth/AuthController";
import { LoginUseCase } from "../../../application/usecases/auth/LoginUseCase";
import { SignUpUseCase } from "../../../application/usecases/auth/SignUpUseCase";

const router = Router();
const userRepo = new UserRepository();
const addressRepo = new AddressRepository();

const authController = new AuthController(
  new LoginUseCase(userRepo),
  new SignUpUseCase(userRepo, addressRepo),
);

router.post("/auth/login",   (req, res) => authController.login(res, req));
router.post("/auth/sign-up", (req, res) => authController.signUp(req, res));
router.post("/auth/logout",  (_req, res) => authController.logout(res));

export { router as authRouter };
