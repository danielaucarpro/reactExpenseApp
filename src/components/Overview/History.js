import React, { useContext, useState } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//pages
import PopUp from './PopUp'
//icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
//css
import './History.css'

export default function History(props) {
    console.log(props);

    /*importing GlobalContext
    using destructuring to avoid messy code.
    with out destructuring we need to do context.history to map the array*/
    const { history } = useContext(GlobalContext);
    console.log(history);
    const { deleteTransaction } = useContext(GlobalContext);
    const { updateTransaction } = useContext(GlobalContext);
    const [isUpdating, setIsUpdating] = useState(false);

    const popUpModal = () => {
        console.log(isUpdating);
        setIsUpdating(!isUpdating);
    }
    const closePopUp = () => {
        setIsUpdating(false);
    }

    return (
        <>
            {/* CREATE CONDITIONAL FOR NEGATIVE OR POSITIVE CLASS */}
            <div className='overview-historyContainer'>
                {history.map(item => (
                    <div key={item.id} className='overview-transaction negative'>
                        <li className='overview-list'>
                            <div className='overview-text'>
                                <span>{item.text}</span>
                            </div>
                            <div className='overview-amount'>
                                {/* CREATE CONDITIONAL FOR NEGATIVE OR POSITIVE SIGN */}
                                <span>- {Math.abs(item.amount)}</span>
                            </div>
                            <div className='detailsIcon'>
                                <MoreHorizIcon onClick={popUpModal} />
                            </div>
                        </li>
                        {isUpdating ? <PopUp close={closePopUp} delete={deleteTransaction} id={item.id} update={updateTransaction} /> : null}
                    </div>
                ))}
            </div>
        </>
    )
}
