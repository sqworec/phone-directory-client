import React from "react";
import './EmployeeLine.css'
function EmployeeLine({employee}) {

    return (
        <tr className={"employee"}>
            <td className={"idColumn"}>{employee.ID}</td>
            <td><b>{employee.Full_name}</b></td>
            <td>{employee.Department}</td>
            <td>{employee.Post}</td>
            <td>{employee.Internal_phone_number}</td>
            <td>{employee.City_phone_number}</td>
            <td>{employee.Mobile_phone_number}</td>
        </tr>
    )
}

export default EmployeeLine