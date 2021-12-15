import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from '../ContextAPI/GlobalState';
//css
import './AddPayment.css';
//material 
import Box from '@mui/material/Box';
import { Button, FormControl, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//icons
import LabelIcon from '@mui/icons-material/Label';
import TodayIcon from '@mui/icons-material/Today';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CategoryIcon from '@mui/icons-material/Category';

export const AddPayment = () => {
    //Hook. create state and a function to manipulate the state (setText and setAmount)
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [categories, setCategories] = useState('');
    const [amount, setAmount] = useState(0);

    //use transaction action
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = async e => {
        e.preventDefault();

        // const newTRansaction = {
        //     //passinf value into object
        //     text,
        //     date,
        //     categories,
        //     amount: +amount
        // }

        // console.log('new transaction', newTRansaction);

        if (text === '' || date === '' || amount === '' || categories === '') {
            alert('You must complete all fields!')
        } else {
            // Sync a post with a user
            const response = await fetch('http://localhost:5000/post', {
                method: "POST",
                headers: {
                    'x-access-token': localStorage.getItem('access-token'),
                },
                body: JSON.stringify({
                    name: text,
                    date: date,
                    categories: categories,
                    amount: +amount
                })
            })

            console.log(response);

            const data = await response.json();
            console.log(data.data[0], "data");
            alert(data.message);

            //call addTransaction from context and passing newTransaction
            // addTransaction(newTRansaction);
            setText('');
            setDate('');
            setAmount('');
            setCategories('');
        }

    }



    return (
        <>
            <div className='addPayment-header' >
                <Link to='/overview' className='addPayment-backBtn' >
                    <ArrowBackIosIcon fontSize='small' />
                </Link>
            </div>
            <div className='addPayment'>
                <Typography className='addPayment-title' variant="h6" gutterBottom component="div" sx={{ m: 5, px: 5 }}>
                    Add a Bill
                </Typography>
            </div>
            <Box className='addPayment-boxContainer' sx={{ display: 'flex', alignItems: 'flex-end', m: 5 }}>
                <form className='addPayment-formContainer' onSubmit={onSubmit}>
                    <FormControl variant="standard" sx={{ m: 5 }}>
                        <InputLabel htmlFor="name">
                            Name
                        </InputLabel>
                        {/* use onchange to update the state and call function to give us whatever is being typed */}
                        <Input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter text.."
                            id="input-with-icon-purchaseditem"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LabelIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 5 }}>
                        <InputLabel htmlFor="date">
                            Date
                        </InputLabel>
                        {/* use onchange to update the state and call function to give us whatever is being typed */}
                        <Input
                            id="input-with-icon-autowidth"
                            startAdornment={
                                <InputAdornment position="start">
                                    <TodayIcon />
                                </InputAdornment>
                            }
                            input type="date"
                            value={date} onChange={(e) => setDate(e.target.value)}
                            placeholder="Enter Date..."
                        />
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 5 }}>
                        <InputLabel id="demo-simple-select-standard-label">Categories</InputLabel>
                        <Select
                            startAdornment={
                                <InputAdornment position="start">
                                    <CategoryIcon />
                                </InputAdornment>
                            }
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                            label="Categories"
                        >
                            <MenuItem value={'Groceries'}>Groceries</MenuItem>
                            <MenuItem value={'Food'}>Food</MenuItem>
                            <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                            <MenuItem value={'Travel'}>Travel</MenuItem>
                            <MenuItem value={'Bill'}>Bill</MenuItem>
                            <MenuItem value={'Fuel'}>Fuel</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 5 }}>
                        <InputLabel htmlFor="amount">
                            Amount
                        </InputLabel>
                        {/* use onchange to update the state and call function to give us whatever is being typed */}
                        <Input
                            id="input-with-icon-calender-autowidth"
                            startAdornment={
                                <InputAdornment position="start">
                                    <MonetizationOnIcon />
                                </InputAdornment>
                            }
                            input type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount..."
                        />
                    </FormControl>

                    <Button type="submit" variant="contained" sx={{ m: 2 }} >Add Bill</Button>
                </form>
            </Box>
        </>
    )
}

export default AddPayment;
