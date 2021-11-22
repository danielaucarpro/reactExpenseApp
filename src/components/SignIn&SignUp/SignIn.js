//importing react router
import { Link } from "react-router-dom";
//importing icons
import LoginIcon from '@mui/icons-material/Login';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const SignIn = () => {
    return (
        <>
            <div className='signIn'>
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
            </div>
        </>
    );
}

export default SignIn;