import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./docs/swagger";
import { userRouter } from "./presentation/routes/user/UserRouter";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./presentation/routes/auth/AuthRouter";
import { authMiddleware } from "./middlewares/AuthMiddleware";
import { apiRouter } from "./presentation/routes/Index";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/enterprise-prod-instance/api", apiRouter);

export default app;
