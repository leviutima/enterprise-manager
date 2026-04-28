import { Router } from "express";
import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";
import { UserController } from "../../controllers/user/UserController";
import { FindAllUsersUseCase } from "../../../application/usecases/user/FindAllUsersUseCase";
import { CreateUserUseCase } from "../../../application/usecases/user/CreateUserUseCase";
import { FindByEmailUseCase } from "../../../application/usecases/user/FindByEmailUseCase";
import { UpdateUserUseCase } from "../../../application/usecases/user/UpdateUserUseCase";
import { UpdatePasswordUseCase } from "../../../application/usecases/user/UpdatePasswordUseCase";
import { DeleteUserUseCase } from "../../../application/usecases/user/DeleteUserUseCase";
import { AddressRepository } from "../../../infrastructure/repositories/adress/AddressRepository";

const router = Router();

const userRepo = new UserRepository();
const addressRepo = new AddressRepository()

const userController = new UserController(
  new FindAllUsersUseCase(userRepo),
  new CreateUserUseCase(userRepo, addressRepo),
  new FindByEmailUseCase(userRepo),
  new UpdateUserUseCase(userRepo),
  new UpdatePasswordUseCase(userRepo),
  new DeleteUserUseCase(userRepo),
);

router.get("/users", (req, res) => userController.getAll(req, res));
// router.post("/users", (req, res) => userController.create(req, res));
router.get("/users/:email", (req, res) => userController.findByEmail(req, res));
router.put("/users/:id", (req, res) => userController.update(req, res));
router.patch("/users/:id/password", (req, res) =>
  userController.updatePassword(req, res),
);
router.delete("/users/:id", (req, res) => userController.delete(req, res));

export {router as userRouter}