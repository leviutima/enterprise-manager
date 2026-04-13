import { readFileSync } from "node:fs";
import { pool } from "./db";
import path from "node:path";
import "dotenv/config";

const migrations = [
  "create_address_table.sql",
  "create_enterprise_table.sql",
  "create_sector_table.sql",
  "create_users_table.sql",
  "update_user_status.sql",
  "update_address_column_neighborhood.sql"
];

async function migrate() {
  const client = pool.connect();

  try {
    for (const file of migrations) {
      const sql = readFileSync(
        path.join(__dirname, "migrations", file),
        "utf-8",
      );
      await (await client).query(sql);
      console.log(`${file} executado`);
    }
    console.log("Todas as migrations rodaram com sucesso!");
  } catch (err) {
    console.error("erro ao rodar migrations", err);
  } finally {
    ((await client).release(), await pool.end);
  }
}

migrate()
