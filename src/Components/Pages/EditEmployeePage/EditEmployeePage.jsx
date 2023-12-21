import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const EditEmployeePage = () => {
    const [id, setId] = useState('')
    const router = useNavigate()

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

    useEffect(() => {
        revealEmployee();
    }, [id]);

    const [employee, setEmployee] = useState({
        Full_name: '',
        Department: '',
        Post: '',
        Internal_phone_number: '',
        City_phone_number: '',
        Mobile_phone_number: ''
    })

    let updEmployee = employees.find((emp) => emp.ID === Number(id))

    const revealEmployee = () => {
        if (updEmployee !== undefined) {
            setEmployee({
                Full_name: updEmployee.Full_name,
                Department: updEmployee.Department,
                Post: updEmployee.Post,
                Internal_phone_number: updEmployee.Internal_phone_number,
                City_phone_number: updEmployee.City_phone_number,
                Mobile_phone_number: updEmployee.Mobile_phone_number
            })
        }
    }

    const handleEdit = (e) => {
        e.preventDefault()

        fetch('http://localhost:8080/employees/' + id, {
            method: 'PUT',
            body: JSON.stringify(employee)
        }).then(() => {
            router('/all-employees')
        })
    }

    return (
        <div>
            <label>ID:</label>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            {updEmployee !== undefined
                ? (<form id={"employeeForm"} onSubmit={handleEdit}>
                        <label>ФИО:</label>
                        <input
                            type="text"
                            id={"Full_name"}
                            value={employee.Full_name}
                            onChange={(e) => setEmployee({...employee, Full_name: e.target.value})}
                            required
                        />

                        <label>Отдел:</label>
                        <input
                            type="text"
                            id={"Department"}
                            value={employee.Department}
                            onChange={(e) => setEmployee({...employee, Department: e.target.value})}
                            required
                        />

                        <label>Должность:</label>
                        <input
                            type="text"
                            id={"Post"}
                            value={employee.Post}
                            onChange={(e) => setEmployee({...employee, Post: e.target.value})}
                            required
                        />

                        <label>Внутренний телефон:</label>
                        <input
                            type="text"
                            id={"Internal_phone_number"}
                            value={employee.Internal_phone_number}
                            onChange={(e) => setEmployee({...employee, Internal_phone_number: e.target.value})}
                            required
                        />

                        <label>Городской телефон:</label>
                        <input
                            type="text"
                            id={"City_phone_number"}
                            value={employee.City_phone_number}
                            onChange={(e) => setEmployee({...employee, City_phone_number: e.target.value})}
                            required
                        />

                        <label>Мобильный телефон:</label>
                        <input
                            type="text"
                            id={"Mobile_phone_number"}
                            value={employee.Mobile_phone_number}
                            onChange={(e) => setEmployee({...employee, Mobile_phone_number: e.target.value})}
                            required
                        />

                        <button>Подтвердить</button>
                    </form>
                )
                : (
                    <div>Введите существующий ID</div>
                )}
        </div>
    )
}

export default EditEmployeePage