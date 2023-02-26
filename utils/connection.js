const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root", // update MySQL user name - default user name is "root"
  port: 3306,
  password: "tray1963", // update MySQL password
  database: "employee_db",
});
module.exports = connection;