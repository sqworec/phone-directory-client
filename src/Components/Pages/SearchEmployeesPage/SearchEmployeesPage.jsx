import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import EmployeesTable from "../../Employees/EmployeesTable";

function SearchEmployeesPage() {
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

    const [searchTerm, setSearchTerm] = useState({
        Full_name: '',
        Department: '',
        Post: '',
        Internal_phone_number: '',
        City_phone_number: '',
        Mobile_phone_number: ''
    })

    const filteredEmployees = employees.filter(employee => {
        for (const key in searchTerm) {
            if (searchTerm[key] !== '' && !employee[key].toLowerCase().includes(searchTerm[key].toLowerCase())) {
                return false;
            }
        }
        return true;
    })

    const router = useNavigate()

    return (
        <>
            <form id={"employeeForm"}>
                <label>ФИО:</label>
                <input
                    type="text"
                    id={"Full_name"}
                    value={searchTerm.Full_name}
                    onChange={(e) => setSearchTerm({...searchTerm, Full_name: e.target.value})}
                    required
                />

                <label>Отдел:</label>
                <input
                    type="text"
                    id={"Department"}
                    value={searchTerm.Department}
                    onChange={(e) => setSearchTerm({...searchTerm, Department: e.target.value})}
                    required
                />

                <label>Должность:</label>
                <input
                    type="text"
                    id={"Post"}
                    value={searchTerm.Post}
                    onChange={(e) => setSearchTerm({...searchTerm, Post: e.target.value})}
                    required
                />

                <label>Внутренний телефон:</label>
                <input
                    type="text"
                    id={"Internal_phone_number"}
                    value={searchTerm.Internal_phone_number}
                    onChange={(e) => setSearchTerm({...searchTerm, Internal_phone_number: e.target.value})}
                    required
                />

                <label>Городской телефон:</label>
                <input
                    type="text"
                    id={"City_phone_number"}
                    value={searchTerm.City_phone_number}
                    onChange={(e) => setSearchTerm({...searchTerm, City_phone_number: e.target.value})}
                    required
                />

                <label>Мобильный телефон:</label>
                <input
                    type="text"
                    id={"Mobile_phone_number"}
                    value={searchTerm.Mobile_phone_number}
                    onChange={(e) => setSearchTerm({...searchTerm, Mobile_phone_number: e.target.value})}
                    required
                />

                {/*<button>Искать</button>*/}
            </form>

            <EmployeesTable employees={filteredEmployees}/>
        </>
    )
}

export default SearchEmployeesPage