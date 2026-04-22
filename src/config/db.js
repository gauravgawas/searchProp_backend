import mysql from "mysql2/promise";

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "gG@7350563644",
//   database: "auth",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

const pool = mysql.createPool({
  host: "database-1.c4jiuuy40jjq.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "gaurav47",
  database: "auth", // you need to create this
  waitForConnections: true,
  port: 3306,
  connectionLimit: 10,
});

export default pool;
