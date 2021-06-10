import LoginForm from "../UserLogin/LoginForm";
import TestWithFormkAndYup from "../UserLogin/TestWithFormikAndYup/TestWithFormkAndYup";
import UserRegistration from "../UserRegistration/UserRegistration";
import {Switch, Route} from "react-router-dom"
import LandingPage from "../../Pages/LoginPage/LandingPage";
import RegistrationPage from "../../Pages/RegisterPage/RegistrationPage";



export default () => (
    <>

        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route exact path="/registration">
                <RegistrationPage/>
            </Route>
        </Switch>
            {/*<h2>Contentas</h2>*/}
            {/*/!*<LoginForm/>*!/*/}
            {/*<TestWithFormkAndYup/>*/}
            {/*<UserRegistration/>*/}


    </>
)