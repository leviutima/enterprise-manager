import { Router } from "express";
import { authMiddleware } from "../../middlewares/AuthMiddleware";
import { authRouter } from "./auth/AuthRouter";
import { userRouter } from "./user/UserRouter";

const router = Router();

router.use(authRouter);
router.use(authMiddleware, userRouter);

export { router as apiRouter };
