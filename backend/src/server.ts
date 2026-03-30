import 'dotenv/config'
import app from "./app";
import { env } from "./config/env";

app.listen({
    port: env.PORT,
    log: console.log(`Servidor rodando em ${env.PORT}. BOA MLK`),
})