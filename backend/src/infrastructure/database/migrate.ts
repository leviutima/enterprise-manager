import { readFileSync } from "node:fs";
import { pool } from "./db";
import path from "node:path";
import "dotenv/config";

const migrations = [
  "create_enterprise_table.sql",    
  "create_sector_table.sql",      
  "create_users_table.sql",            
  "create_address_table.sql",           
  "alter_table_users_add_address_id.sql",   
  "alter_table_enterprises_add_address_id.sql", 
  "create_trigger_delete_address.sql",   
  "update_user_status.sql",
  "update_user_phone.sql",
];
async function migrate() {
  const client = pool.connect();

  let file = "";
  try {
    for (const migration of migrations) {
      file = migration;
      const sql = readFileSync(
        path.join(__dirname, "migrations", migration),
        "utf-8",
      );
      await (await client).query(sql);
      console.log(`${migration} executado`);
    }
  } catch (err) {
    console.error(` erro no arquivo: ${file}`);
    console.error(err);
  } finally {
    ((await client).release(), await pool.end);
  }
}

migrate();
