import React from 'react'
//importing react router modules
import { Link } from "react-router-dom";
//importing meterial ui icons
import DashboardIcon from '@material-ui/icons//Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PieChartIcon from '@mui/icons-material/PieChart';

const Navbar = () => {
    return (
        <>
            <Link to='/overview'><DashboardIcon/></Link>
            <Link to='/addTransaction'><AddCircleIcon/></Link>
            <Link to='/report'><PieChartIcon/></Link>
        </>
    )
}

export default Navbar;