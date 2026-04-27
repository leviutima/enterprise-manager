import { Router } from "express";
import { authMiddleware } from "../../middlewares/AuthMiddleware";
import { authRouter } from "./auth/AuthRouter";
import { userRouter } from "./user/UserRouter";

const router = Router();

router.use(authMiddleware, userRouter); 
router.use(authRouter);               

export { router as apiRouter };
