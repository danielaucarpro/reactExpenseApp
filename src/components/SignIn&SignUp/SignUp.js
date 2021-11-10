//importing react router
import { Link } from "react-router-dom";
//pages
import Header from "../Navbar/Header";



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
            <Header />
        </>
    );
}

export default SignUp;