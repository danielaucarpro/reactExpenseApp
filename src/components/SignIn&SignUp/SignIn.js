//importing react router
import { Link } from "react-router-dom";
//importing icons
import LoginIcon from '@mui/icons-material/Login';


const SignIn = () => {
    return (
        <>
            <div>Sign In Page</div>
            <form>
                <div>
                    <label>Email</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' />
                </div>
            </form>
            <Link to='/signUp'>Sing Up</Link>
            <Link to='/overview'><LoginIcon /></Link>
        </>
    );
}

export default SignIn;