import Header from "./Components/Header/Header";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import AllEmployeesPage from "./Components/Pages/AllEmployeesPage/AllEmployeesPage";
import AddEmployeePage from "./Components/Pages/AddEmployeePage/AddEmployeePage";
import DeleteEmployeePage from "./Components/Pages/DeleteEmployeePage/DeleteEmployeePage";
import SearchEmployeesPage from "./Components/Pages/SearchEmployeesPage/SearchEmployeesPage";

export default function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path={"/all-employees"} element={<AllEmployeesPage/>}/>
                <Route path={"/add-employee"} element={<AddEmployeePage/>}/>
                <Route path={"/delete-employee"} element={<DeleteEmployeePage/>}/>
                <Route path={"/search-employee"} element={<SearchEmployeesPage/>}/>
            </Routes>
        </Router>
    );
}


