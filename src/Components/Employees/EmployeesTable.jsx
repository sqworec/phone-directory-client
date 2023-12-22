import EmployeeLine from "../EmployeeLine/EmployeeLine";
import './EmployeesTable.css'

export default function EmployeesTable({employees = []}) {
    if (employees.length != 0) {
        return (
            <div>
                <table className={"employeesTable"}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>ФИО</th>
                        <th>Отдел</th>
                        <th>Должность</th>
                        <th>Вн. тел</th>
                        <th>Гор. тел</th>
                        <th>Моб. тел</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(employee => (<EmployeeLine key={employee.ID} employee={employee}/>))
                    }
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <div className={"empty"}>Сотрудники не найдены</div>
    }
}