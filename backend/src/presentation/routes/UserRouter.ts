import { Router } from "express";
import { UserRepository } from "../../infrastructure/repositories/user/UserRepository";
import { UserController } from "../controllers/user/UserController";
import { FindAllUsersUseCase } from "../../application/usecases/user/FindAllUsersUseCase";
import { CreateUserUseCase } from "../../application/usecases/user/CreateUserUseCase";
import { FindByEmailUseCase } from "../../application/usecases/user/FindByEmailUseCase";

const router = Router();

const userRepo = new UserRepository();

const userController = new UserController(
  new FindAllUsersUseCase(userRepo),
  new CreateUserUseCase(userRepo),
  new FindByEmailUseCase(userRepo),
);

router.get("/users", (req, res) => userController.getAll(req, res));
router.post("users", (req, res) => userController.create(req, res));
router.get("/users/:email", (req, res) => userController.findByEmail(req, res));
