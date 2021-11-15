import React from 'react'
//css
import './Navbar.css'
//importing react router modules
import { Link } from "react-router-dom";
//importing meterial ui icons
import DashboardIcon from '@material-ui/icons//Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PieChartIcon from '@mui/icons-material/PieChart';

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <Link className='navbar-icon active' to='/overview'><DashboardIcon /></Link>
                <Link className='navbar-icon' to='/addTransaction'><AddCircleIcon /></Link>
                <Link className='navbar-icon' to='/report'><PieChartIcon /></Link>
            </div>
        </>
    )
}

export default Navbar;