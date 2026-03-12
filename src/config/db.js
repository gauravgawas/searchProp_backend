import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "gG@7350563644",
  database: "auth",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
