import LoginForm from "../UserLogin/LoginForm";
import TestWithFormkAndYup from "../UserLogin/TestWithFormikAndYup/TestWithFormkAndYup";
import UserRegistration from "../UserRegistration/UserRegistration";
import {Switch, Route} from "react-router-dom"
import LandingPage from "../../Pages/LoginPage/LandingPage";
import RegistrationPage from "../../Pages/RegisterPage/RegistrationPage";
import LibraryPage from "../../Pages/LibraryPage/LibraryPage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";



export default () => (
    <>

        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route exact path="/library">
                <LibraryPage/>
            </Route>
            <Route exact path="/profile">
                <ProfilePage/>
            </Route>
            <Route exact path="/registration">
                <RegistrationPage/>
            </Route>

            {/* Čia siuntimas per path parametrus */}

            <Route path="/library/:id">
                <LibraryPage/>
            </Route>

        </Switch>
            {/*<h2>Contentas</h2>*/}
            {/*/!*<LoginForm/>*!/*/}
            {/*<TestWithFormkAndYup/>*/}
            {/*<UserRegistration/>*/}


    </>
)