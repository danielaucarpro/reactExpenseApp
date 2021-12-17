//importing react
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//importing material ui
import { Button, Input, FormControl, InputLabel, Typography, InputAdornment } from "@mui/material";
import Box from '@mui/material/Box';
//css
import './SignIn.css';
//icons
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

const SignIn = () => {

    let navigate = useNavigate();
    let [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let result = await event.target;
        //Call the API
        if (email === '' || password === '') {
            alert('Unvalid email or password! Please try again.');
        } else {
            const response = await fetch('http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await response.json();

            console.log(data);
            if (data.token) {
                localStorage.setItem(`access-token`, data.token);
                navigate('/overview');
            } else if (result.error) {
                setError(result.error)
            }
            alert(data.message);
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
                            Sign In
                        </Typography>
                    </div>
                    <FormControl className="sign-input" variant="standard" sx={{ m: 5 }}>
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

                    <Button type="submit" value="Login" variant="contained" sx={{ m: 2, px: 8 }}>Sign In</Button>

                    <Typography className="signin-member" variant="subtitle1" gutterBottom component="div" sx={{ m: 2 }}>
                        Not A Member yet?
                        <Link to='/signUp'> Sign Up </Link>
                    </Typography>

                </form>
            </Box>
        </>
    );
}

export default SignIn;