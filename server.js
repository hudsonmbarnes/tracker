const mysql = require('mysql');
const inquirer = require('inquirer');
const conTab = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
  });