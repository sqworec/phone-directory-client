import Employees from "./Components/Employees/Employees";
import Header from "./Components/Header/Header";
import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import React from 'react';
import AllEmployeesPage from "./Components/Pages/AllEmployeesPage/AllEmployeesPage";
import AddEmployeePage from "./Components/Pages/AddEmployeePage/AddEmployeePage";

export default function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path={"/all-employees"} element={<AllEmployeesPage/>}/>
                    <Route path={"/add-employee"} element={<AddEmployeePage/>}/>
                </Routes>
            </div>
        </Router>

        // <>
        //     <div className={"appBody"}>
        //
        //     </div>
        // </>
    );
}


