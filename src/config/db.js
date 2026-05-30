import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "auth",
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 60000,
});

// const pool = mysql.createPool({
//   host: "database-1.c4jiuuy40jjq.us-east-1.rds.amazonaws.com",

//   user: "admin",
//   password: "gaurav_aws47",
//   database: "auth", // you need to create this
//   waitForConnections: true,
//   port: 3306,
//   connectionLimit: 10,
// });

export default pool;
