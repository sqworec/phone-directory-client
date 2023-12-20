import './Header.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className={"buttonContainer"}>
                <Link to={"/all-employees"}>Сотрудники</Link>
                <Link to={"/add-employee"}>Добавление</Link>
            </div>
        </header>
    )
}

export default Header