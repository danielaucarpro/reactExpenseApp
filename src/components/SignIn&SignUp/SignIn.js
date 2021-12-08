//importing react router
import { Link } from "react-router-dom";
//importing icons
import LogoutIcon from '@mui/icons-material/Login';
import {useState} from "react"; 
import {Button, Input, FormControl, InputLabel, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import './SignIn.css'; 


const SignIn = () => {

    const [email,setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        //Call the API
        const response = await fetch ('http://localhost:5000/auth/login', {
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
        if(data.token) {
            localStorage.setItem(`access-token`, data.token); 
        }
        alert(data.message); 
    }

    return (
        <>
           <Box sx={{ display: 'flex', alignItems: 'flex-end', m:5}}>
                <form onSubmit={handleFormSubmit}>
                    <Typography variant="h6" gutterBottom component="div" sx={{m:5, px:5}}>
                        Sign In
                    </Typography>
                    <FormControl variant="standard" sx={{m:5}}>
                        <InputLabel htmlFor="email">
                            Email:
                        </InputLabel>
                        <Input 
                           type="email"
                           value={email}  
                           onChange={(e) => setEmail(e.target.value)} 
                           placeholder="Email" 
                        />
                    </FormControl>

                    <br />

                    <FormControl variant="standard" sx={{m:5}}>
                        <InputLabel htmlFor="password">
                            Password:
                        </InputLabel>
                        <Input 
                           type="password"
                           value={password} 
                           onChange={(e) => setPassword(e.target.value)} 
                           placeholder="Password" 
                        />
                    </FormControl>

                    <br />

                    <Button　type="submit" value="Login" variant="contained" sx={{m:5, px:6}}>Sign In</Button>
                    
                    <br />

                    <Typography variant="subtitle1" gutterBottom component="div" sx={{m:2}}>
                        Not A Member yet? 
                        <Link to='/signUp'> Sign Up </Link>
                    </Typography>

                </form>
            </Box>
        </>
    );
}

export default SignIn;