const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
  password: "FFDP#1983",
  database: "employee_tracker_db",
});

const mainMenu = () => {
  inquirer
    .prompt({
      name: "input",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
        "Exit",
      ],
    })

    .then((answer) => {
      switch (answer.action) {
        case "View all Employees":
          employeeSearch();
          break;

        case "View all Employees by Department":
          departmentSearch();
          break;

        case "View all Employees by Role":
          roleSearch();
          break;

        case "View all Employees by Manager":
          managerSearch();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Update Employee":
          updateEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Exit":
          connection.end();
          break;
        default:
          console.log(`abort mission: ${answer.action}`);
          break;
      }
    });
};

const employeeSearch = () => {
  connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title,role.salary,department.department,manager_id FROM employee JOIN role ON employee.role_id=role.id JOIN department on department.id = role.department_id',
      (err, searched) => {
          if (err) throw err;
          console.table(searched)
          start();
      });
    };