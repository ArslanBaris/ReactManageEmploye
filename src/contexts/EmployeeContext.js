import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
      user: {
        userName: "hardy123",
        password: "1234",
        userType: "Administrator",
      },
    },
    {
      id: uuidv4(),
      name: "Dominique Perrier",
      email: "dominiqueperrier@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 555-5735",
      user: { userName: "dom123", password: "1234", userType: "user" },
    },
    {
      id: uuidv4(),
      name: "Maria Anders",
      email: "mariaanders@mail.com",
      address: "25, rue Lauriston, Paris, France",
      phone: "(503) 555-9931",
      user: { userName: "maria123", password: "1234", userType: "user" },
    },
    {
      id: uuidv4(),
      name: "Fran Wilson",
      email: "franwilson@mail.com",
      address: "C/ Araquil, 67, Madrid, Spain",
      phone: "(204) 619-5731",
      user: { userName: "fran123", password: "1234", userType: "user" },
    },
    {
      id: uuidv4(),
      name: "Martin Blank",
      email: "martinblank@mail.com",
      address: "Via Monte Bianco 34, Turin, Italy",
      phone: "(480) 631-2097",
      user: { userName: "martin123", password: "1234", userType: "user" },
    },
  ]);

  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };
  // const setForLogin = (userName, password) => {
  //     employees.map( employee => ((employee.user.userName === userName && employee.user.password === password )
  //     ? ( setEmployees(employees.filter(employee1=> employee1.name ===employee.name))  )
  //     : -1  ))
  // }

  const setForLogin = (userName, password) => {
    let count = 0;
    employees.map((employee) => {
      if (
        employee.user.userName === userName &&
        employee.user.password === password
      ) {
        if (employee.user.userType === "user") count++;
      }
    });

    if (count === 1)
      setEmployees(
        employees.filter((employee1) => employee1.user.userName === userName)
      );
  };

  //const sortedEmployees = employees.sort((a,b) => (a.name < b.name ? -1 : 1 ));

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        deleteEmployee,
        updateEmployee,
        setForLogin,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;

// if (employee.user.userType == "Administrator") {
//   setEmployees(
//     employees.filter((employee1) => employee1.name === employee.name)
//   );
// } else if (employee.user.userType == "User") {
//   setEmployees(
//     employees.filter((employee1) => employee1.name === employee.name)
//   );
// }
