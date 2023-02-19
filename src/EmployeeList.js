import React, {useState, useEffect} from 'react'
import './styles.css';


function EmployeeComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = () => {
        fetch('/employees')
            .then(response => response.json())
            .then(data => setEmployees(data));
        console.log(employees);
    };

    return (
        <div className="container">
          <h1 className="text-center">Employees List</h1>
          <a role="button" href="employees/{employee.id}" className="add-button">Add Employee</a>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Employee NickName</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.nickName}</td>
                  <td>
                    <a role="button" href="employees/{employee.id}" className="update-button">
                      Update
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
export default EmployeeComponent

