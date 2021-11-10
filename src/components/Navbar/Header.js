import React from 'react'
//icons
import LogoutIcon from '@mui/icons-material/Logout';
//react router
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link to='/'><LogoutIcon /></Link>
        </>
    )
}

export default Header;
