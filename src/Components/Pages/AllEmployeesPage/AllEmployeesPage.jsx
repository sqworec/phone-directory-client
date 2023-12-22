import EmployeesTable from "../../Employees/EmployeesTable";
import {useEffect, useState} from "react";
function AllEmployeesPage() {
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

    employees.sort((a, b) => {
        return a.Full_name.toLowerCase().localeCompare(b.Full_name.toLowerCase())
    })

    return <EmployeesTable employees={employees}/>
}

export default AllEmployeesPage