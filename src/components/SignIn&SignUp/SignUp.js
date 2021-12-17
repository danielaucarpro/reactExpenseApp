//importing react router
import { Link } from "react-router-dom";
//pages
import { Button, Input, FormControl, InputLabel, Typography, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
//css
import './SignIn.css';
//icons
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //call the API
        if (name === '' || email === '' || password === '') {
            alert('Something went wrong! Please fill up the form.')
        } else {
            const response = await fetch('http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await response.json();
            console.log(data);

            setName('');
            setEmail('');
            setPassword('');
        }
    }

    return (
        <>
            <Box className="signin-container" sx={{ display: 'flex', alignItems: 'flex-end', m: 5 }}>
                <form onSubmit={handleFormSubmit} className="signin-form">
                    <div className="sign-title">
                        <Typography variant="h6" gutterBottom component="div" sx={{ m: 5, px: 5 }}>
                            Sign Up
                        </Typography>
                    </div>
                    <FormControl variant="standard" sx={{ m: 5 }}>
                        <InputLabel htmlFor="name">
                            Name:
                        </InputLabel>
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            }
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 5 }}>
                        <InputLabel htmlFor="email">
                            Email:
                        </InputLabel>
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            }
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 5 }}>
                        <InputLabel htmlFor="password">
                            Password:
                        </InputLabel>
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </FormControl>

                    <Button type="submit" value="Signup" variant="contained" sx={{ m: 5, px: 8 }}>Sing Up</Button>

                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ m: 2 }}>
                        Already A Member?
                        <Link to='/'> Sign In </Link>
                    </Typography>
                </form>
            </Box>
        </>
    );
}

export default SignUp;