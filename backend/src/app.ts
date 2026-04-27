import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./docs/swagger";
import { userRouter } from "./presentation/routes/UserRouter";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/enterprise-prod-instance/api", userRouter);

export default app;
