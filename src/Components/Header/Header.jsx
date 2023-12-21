import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className={"buttonContainer"}>
                <Link to={"/all-employees"}>Сотрудники</Link>
                <Link to={"/add-employee"}>Добавить</Link>
                <Link to={"/delete-employee"}>Удалить</Link>
                <Link to={"/search-employee"}>Поиск</Link>
            </div>
        </header>
    )
}

export default Header