import React from 'react'
//material ui styles
import { styled } from '@mui/material/styles';
//css
import './ComingUp.css';
//icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const ComingUp = () => {
    return (
        <>
            <div className='comingUp-container'>
                <h4 className='comingUp-text'>Coming Up</h4>
                <div className='comingUp-cardContainer'>
                    <div className='comingUp-card comingUp-positive'>
                        <div className='comingUp-header'>
                            <span className='comingUp-itemName' >Bike</span>
                            <MoreHorizIcon className='comingUp-details' />
                        </div>
                        <p className='comingUp-date'>June 15</p>
                        <p className='comingUp-amount'>$: 1,523.00</p>
                    </div>
                    <div className='comingUp-card comingUp-positive'>
                        <span className='comingUp-itemName' >Bike</span>
                        <p className='comingUp-date'>June 15</p>
                        <p className='comingUp-amount'>$: 1,523.00</p>
                    </div>
                    <div className='comingUp-card comingUp-positive'>
                        <span className='comingUp-itemName' >Bike</span>
                        <p className='comingUp-date'>June 15</p>
                        <p className='comingUp-amount'>$: 1,523.00</p>
                    </div>
                    <div className='comingUp-card comingUp-positive'>
                        <span className='comingUp-itemName' >Bike</span>
                        <p className='comingUp-date'>June 15</p>
                        <p className='comingUp-amount'>$: 1,523.00</p>
                    </div>
                    <div className='comingUp-card comingUp-positive'>
                        <span className='comingUp-itemName' >Bike</span>
                        <p className='comingUp-date'>June 15</p>
                        <p className='comingUp-amount'>$: 1,523.00</p>
                    </div>
                    <div className='comingUp-card comingUp-positive'>
                        <span className='comingUp-itemName' >Bike</span>
                        <p className='comingUp-date'>June 15</p>
                        <p className='comingUp-amount'>$: 1,523.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComingUp;
