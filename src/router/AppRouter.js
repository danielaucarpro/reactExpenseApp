//importing react-router modules
import { BrowserRouter, Route, Routes } from "react-router-dom";
//importing pages
import SignIn from "../components/SignIn&SignUp/SignIn";
import SignUp from "../components/SignIn&SignUp/SignUp";
import Overview from '../components/Overview/Overview';

//creating react router
const AppRouter = () => {
    //returning pages to be render, required for react-router-dom v6.
    return (
        <BrowserRouter>
            {/* "Routes" is the new switch, and element is the new component. */}
            <Routes>
                <Route path='/' element={<SignIn />} exact={true} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='overview' element={<Overview />} />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRouter;