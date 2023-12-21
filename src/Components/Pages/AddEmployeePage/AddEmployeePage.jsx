import './AddEmployeePage.css'
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
function AddEmployeePage() {
    const [employee, setEmployee] = useState({
        Full_name : '',
        Department: '',
        Post: '',
        Internal_phone_number: '',
        City_phone_number: '',
        Mobile_phone_number: ''
    })
    const router = useNavigate()

    const handleAddEmployee = (e) => {
        e.preventDefault()

        const data = {
            Full_name: employee.Full_name,
            Department: employee.Department,
            Post: employee.Post,
            Internal_phone_number: employee.Internal_phone_number,
            City_phone_number: employee.City_phone_number,
            Mobile_phone_number: employee.Mobile_phone_number
        }


        fetch('http://localhost:8080/employees', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(() => {
                router('/all-employees')
            })
    }

    return (
        <form id={"employeeForm"} onSubmit={handleAddEmployee}>
            <label>ФИО:</label>
            <input
                type="text"
                id={"Full_name"}
                value={employee.Full_name}
                onChange={(e) => setEmployee({ ...employee, Full_name: e.target.value})}
                required
            />

            <label>Отдел:</label>
            <input
                type="text"
                id={"Department"}
                value={employee.Department}
                onChange={(e) => setEmployee({ ...employee, Department: e.target.value})}
                required
            />

            <label>Должность:</label>
            <input
                type="text"
                id={"Post"}
                value={employee.Post}
                onChange={(e) => setEmployee({ ...employee, Post: e.target.value})}
                required
            />

            <label>Внутренний телефон:</label>
            <input
                type="text"
                id={"Internal_phone_number"}
                value={employee.Internal_phone_number}
                onChange={(e) => setEmployee({ ...employee, Internal_phone_number: e.target.value})}
                required
            />

            <label>Городской телефон:</label>
            <input
                type="text"
                id={"City_phone_number"}
                value={employee.City_phone_number}
                onChange={(e) => setEmployee({ ...employee, City_phone_number: e.target.value})}
                required
            />

            <label>Мобильный телефон:</label>
            <input
                type="text"
                id={"Mobile_phone_number"}
                value={employee.Mobile_phone_number}
                onChange={(e) => setEmployee({ ...employee, Mobile_phone_number: e.target.value})}
                required
            />

            <button>Добавить</button>
        </form>
    )
}

export default AddEmployeePage