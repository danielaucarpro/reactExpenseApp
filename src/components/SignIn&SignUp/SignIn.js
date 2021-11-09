//importing react router
import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <>
            <div>Sign In Page</div>
            <div>
                <Link to='signUp'>Sing Up</Link>
                <Link to='overview'>Overview</Link>
            </div>
        </>
    );
}

export default SignIn;