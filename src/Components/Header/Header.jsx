import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className={"buttonContainer"}>
                <Link to={"/all-employees"}>Сотрудники</Link>
                <Link to={"/add-employee"}>Добавить</Link>
                <Link to={"/delete-employee"}>Удалить</Link>
                <Link to={"/search-employees"}>Искать</Link>
                <Link to={"/edit-employee"}>Редактировать</Link>
            </div>
        </header>
    )
}

export default Header