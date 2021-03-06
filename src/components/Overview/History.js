import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextAPI/GlobalState";
import moment from "moment";
//material ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//pages
import PopUp from './PopUp';
//icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
//css
import './History.css'
//fetching data
import FetchUsersTransactions from '../ContextAPI/FetchUsersTransactions';

export default function History(props) {

    /*importing GlobalContext
    using destructuring to avoid messy code.
    with out destructuring we need to do context.history to map the array*/
    const { history } = useContext(GlobalContext);
    console.log(history, "history");
    const { deleteTransaction } = useContext(GlobalContext);
    const { updateTransaction } = useContext(GlobalContext);
    const [isUpdating, setIsUpdating] = useState({ open: false });
    //importing data from the fetch js
    const userTransactions = [FetchUsersTransactions()][0];

    const popUpModal = (id) => {

        setIsUpdating({
            open: !isUpdating,
            id
        });
    }
    const closePopUp = () => {
        setIsUpdating({ open: false });
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, sm: 9, md: 12 }}
                    className='overview-historyContainer'>
                    {history.length > 0 ? history.map(item => {
                        // console.log(item.id, isUpdating, 'Value');
                        return (
                            <Grid item xs={1} sm={4} md={5} key={item.id} className={`overview-transaction ${item.amount > 0 ? 'positive' : 'negative'}`}>
                                <li className='overview-list'>
                                    <div className='overview-text'>
                                        <span>{item.name}</span>
                                        <br />
                                        <span>{moment(item.date).format('MMM-DD-YYYY')}</span>
                                    </div>
                                    <div className='overview-amount'>
                                        {/* CREATE CONDITIONAL FOR NEGATIVE OR POSITIVE SIGN */}
                                        <span>{item.amount > 0 ? '+' : '-'} {Math.abs(item.amount)}</span>
                                    </div>
                                    <div className='detailsIcon'>
                                        <MoreHorizIcon onClick={() => popUpModal(item.id)} />
                                    </div>
                                </li>
                                {isUpdating.id === item.id ? <PopUp close={closePopUp} delete={deleteTransaction} update={updateTransaction} popUpData={isUpdating} /> : null}
                            </Grid>
                        )
                    }) :
                        <div className="history-noExpense" >
                            <h3>No expense to show</h3>
                            <Link to='/AddPayment' className="history-link" >Click here to add one</Link>
                        </div>
                    }
                </Grid>
            </Box>
        </>
    )
}
