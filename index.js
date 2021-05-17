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
  inquirer
    .prompt({
      name: "input",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add a department",
        "Add a role",
        "Add an employee",
        "View all departments",
        "View all roles",
        "View all employees",
        "Update employee role",
        "Exit",
      ],
    })
    .then(function (question) {
      console.log(question);
      switch (question.input) {
        case "Add an employee":
          addEmployee();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

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

        case "Update employee role":
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
    });
};

/*need to add joins*/
const employeeSearch = () => {
  /* connection.query('SELECT.from emp employee.id, employee.first_name, employee.last_name, employee. role.id, manager_id, role.title, role.salary, role.department_id,department.department, FROM employee JOIN role ON employee.role_id=role.id JOIN department on department.id = role.department_id',*/
  connection.query("SELECT * FROM  employee", (err, searched) => {
    if (err) throw err;
    console.table(searched);
    Employee();
  });
};

const departmentSearch = () => {
  connection.query("SELECT * FROM  department", (err, searched) => {
    if (err) throw err;
    console.table(searched);
    Employee();
  });
};

const roleSearch = () => {
  connection.query("SELECT * FROM  role", (err, searched) => {
    if (err) throw err;
    console.table(searched);
    Employee();
  });
};

const managerSearch = () => {
  connection.query("SELECT * FROM  manager", (err, searched) => {
    if (err) throw err;
    console.table(searched);
    Employee();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "first",
        type: "input",
        message: "What is your employees first name?",
      },
      {
        name: "last",
        type: "input",
        message: "What is your employees last name?",
      },
      
    ])
    .then((res) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: res.first,
          last_name: res.last,
          role_id: res.title,
        },
        (err) => {
          if (err) throw err;
          Employee();
        }
      );

const addDepartment = () => {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What do you want to name your department?",
    })
    .then(function (question) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: question.name,
        }
        /* (err, searched) => {
      if (err) throw err;
      console.table(searched);*/
      );
      Employee();
    });
};

const addRole = () => {
  inquirer
    .prompt({
      name: "input",
      type: "list",
      message: "Pick a role?",
      choices: ["boss", "Lawyer", "Salesdude", "Techie"],
    })
    .then(function (question) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          name: question.name,
        },
        (err, searched) => {
          if (err) throw err;
          console.table(searched);
          Employee()
        }
      );
    });
};


const updateEmployee = () => {
  inquirer
    .prompt([
      {
        name: "employeeId",
        type: "input",
        message:
          "What  Employee would you like to update, Enter the Employees ID?",
      },
      {
        name: "newRole",
        type: "input",
        message:
          "What is the new Role you would you like to give this Employee, Enter the new Role ID?",
      },
    ])
    .then((res) => {
      console.log("updating employee role");
      connection.query(
        `UPDATE employee SET role_id = ${res.newRole} WHERE id =${res.employeeId}`,
        (err) => {
          if (err) throw err;
          Employee();
        }
      );
    });
};

Employee();
