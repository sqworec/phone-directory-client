import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './DeleteEmployeePage.css'
const DeleteEmployeePage = () => {

    const [id, setId] = useState('')
    const router = useNavigate()
    const handleDelete = (e) => {
        e.preventDefault()

        fetch('http://localhost:8080/employees/' + id, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(id)
        })
            .then(async (res) => {
                await res.text()
                router('/all-employees')
            })
    }

    return (
        <form onSubmit={handleDelete}>
            <label>ID:</label>
            <input
                autoComplete={"off"}
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button className={"redButton"}>Удалить</button>
        </form>
    )
}

export default DeleteEmployeePage