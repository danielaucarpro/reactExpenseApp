//importing react router
import { Link } from "react-router-dom";
//importing icons
import LoginIcon from '@mui/icons-material/Login';


const SignUp = () => {
    return (
        <>
            <div>Sign Up Page</div>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' />
                </div>
                <button>Submit</button>
            </form>
            <Link to='/'><LoginIcon/></Link>
        </>
    );
}

export default SignUp;