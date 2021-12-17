import React from 'react'
//css
import './Header.css';
//icons
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
//react router
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className='header-container'>
            {/* logout is just for debugging, delete later */}
            {/* <Link to='/'><LogoutIcon /></Link> */}
            <MenuIcon className='header-menuIcon'/>
        </div>

        </>
    )
}

export default Header;
