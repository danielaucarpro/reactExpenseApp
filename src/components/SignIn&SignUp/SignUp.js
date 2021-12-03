//importing react router
import { Link } from "react-router-dom";
//pages
import { Button, Input, FormControl, InputLabel, Typography  } from '@mui/material';
import Box from '@mui/material/Box';
import {useState} from 'react'; 
import Header from "../Navbar/Header";



const SignUp = () => {

    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        //call the API
        const response = await fetch ('http://localhost:5000/auth/signup', {
            method: "POST", 
            headers: {
                'Content-Type': "application/json"
            }, 
            body:JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', m:5}}>
                <form onSubmit={handleFormSubmit}>
                    <FormControl variant="standard" sx={{m:5}}>
                        <InputLabel htmlFor="name">
                            Name:
                        </InputLabel>
                        <Input 
                           type="text"
                           value={name}  
                           onChange={(e) => setName(e.target.value)} 
                           placeholder="Name" 
                        />
                    </FormControl>

                    <br />

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

                    <Button　type="submit" value="Signup" variant="contained" sx={{m:5, px:6}}>Sing Up</Button>

                    <br />

                    <Typography variant="subtitle1" gutterBottom component="div" sx={{m:2}}>
                        Already A Member? 
                        <Link to='/'> Sign In </Link>
                    </Typography>

                </form>
            </Box>
        </>
    );
}

export default SignUp;