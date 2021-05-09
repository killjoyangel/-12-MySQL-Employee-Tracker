const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
  password: "FFDP#1983",
  database: "employee_tracker_db",
});

const Employee = () => {
  inquirer.prompt({
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
  .then (function (question){
    console.log(question)
  switch (question.input) {
    case "View all employees":
      employeeSearch();
      break;

    case "View all departments":
      departmentSearch();
      break;

    case "View all roles":
      roleSearch();
      break;

    case "View all Employees by Manager":
      managerSearch();
      break;

    case "Add Employee":
      addEmployee();
      break;

    case "Add a department":
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

    default:
      connection.end();
      console.log(`abort mission`);
      break;
  }
  })};

  /*need to add joins*/
const employeeSearch = () => {
  connection.query(
    "SELECT * FROM  employee",
    (err, searched) => {
      if (err) throw err;
      console.table(searched);
      Employee();
    }
  );
};

const departmentSearch = () => {
  connection.query(
    "SELECT * FROM  department",
    (err, searched) => {
      if (err) throw err;
      console.table(searched);
      Employee();
    }
  );
};

const roleSearch = () => {
  connection.query(
    "SELECT * FROM  role",
    (err, searched) => {
      if (err) throw err;
      console.table(searched);
      Employee();
    }
  );
};

const managerSearch = () => {
  connection.query(
    "SELECT * FROM  manager",
    (err, searched) => {
      if (err) throw err;
      console.table(searched);
      Employee();
    }
  );
};

const addEmployee = () => {
  connection.query(
    "INSERT INTO employee SET?",
    (err, searched) => {
      if (err) throw err;
      console.table(searched);
      Employee();
    }
  );
};


const addDepartment = () => {
  inquirer.prompt({
    name: "name",
    type: "input",
    message: "What do you want to name your department?",
  }).then (function(question){
  connection.query(
    "INSERT INTO department SET ?",{
    name: question.name
    },
    (err, searched) => {
      if (err) throw err;
      console.table(searched);
      Employee();
    }
  )});
}


Employee()