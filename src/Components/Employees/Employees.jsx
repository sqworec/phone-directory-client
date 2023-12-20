import React, {useEffect, useState} from "react";
import EmployeeLine from "../EmployeeCard/EmployeeLine";
import './Employees.css'
export default function Employees() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/employees", {
            method: "GET",

        })
            .then(async (res) => {
                const employeesData = await res.json()
                setEmployees(employeesData)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    return (
        <div>
            <table className={"employeesTable"}>
                <tr>
                    <th>ID</th>
                    <th>ФИО</th>
                    <th>Отдел</th>
                    <th>Должность</th>
                    <th>Вн. тел</th>
                    <th>Гор. тел</th>
                    <th>Моб. тел</th>
                </tr>
                {employees.map(employee => (
                    <EmployeeLine key={employee.ID} employee={employee}/>
                ))}
            </table>
        </div>
    )
}