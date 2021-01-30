const mysql = require('mysql');
const inquirer = require('inquirer');
const conTab = require('console.table');
const { allowedNodeEnvironmentFlags } = require('process');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
  });

console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║     _____                 _                         ║
║    | ____|_ __ ___  _ __ | | ___  _   _  ___  ___   ║
║    |  _| | '_ \` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\  ║
║    | |___| | | | | | |_) | | (_) | |_| |  __/  __/  ║
║    |_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|  ║
║                    |_|            |___/             ║
║                                                     ║
║     __  __                                          ║
║    |  \\/  | __ _ _ __   __ _  __ _  ___ _ __        ║
║    | |\\/| |/ _\` | '_ \\ / _\` |/ _\` |\/ _ \\ '__|       ║
║    | |  | | (_| | | | | (_| | (_| |  __/ |          ║
║    |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|          ║
║                              |___/                  ║
║                                                     ║
\╚═════════════════════════════════════════════════════╝
`);

connection.connect(function(err) {
    if (err) throw err;
    start();
  });
  
// user choices
function start(){
    inquirer
        .prompt({
            name: "choices",
            type: "list",
            message: "What would you like to do?",
            choices: ["ADD DEPARTMENT", "ADD ROLE", "ADD EMPLOYEE", "VIEW DEPARTMENT", "VIEW ROLE", "VIEW EMPLOYEE", "UPDATE EMPLOYEE"]
        })

        .then(function(answer){
            switch (answer.action) {
                case "ADD DEPARTMENT":
                addDepartment();
                break;
                
                case "ADD ROLE":
                addRole();
                break;
                
                case "ADD EMPLOYEE":
                addEmployee();
                break;

                case "VIEW DEPARTMENT":
                viewDepartment();
                break;

                case "VIEW ROLE":
                viewRole();
                break;

                case "VIEW EMPLOYEE":
                viewEmployee();
                break;

                case "UPDATE EMPLOYEE":
                updateEmployee();
                break;

                default:
                end();
            }
        });
}

function addDepartment() {
    
