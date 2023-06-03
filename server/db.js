import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "220502JAkt*",
  database: "tasksdb",
});
