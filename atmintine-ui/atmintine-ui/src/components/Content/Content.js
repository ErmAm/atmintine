import LoginForm from "../UserLogin/LoginForm";
import TestWithFormkAndYup from "../UserLogin/TestWithFormikAndYup/TestWithFormkAndYup";
import UserRegistration from "../UserRegistration/UserRegistration";
import {Switch, Route} from "react-router-dom"
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegistrationPage from "../../Pages/RegisterPage/RegistrationPage";
import LibraryPage from "../../Pages/LibraryPage/LibraryPage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import Users from "../../Pages/Users/Users";
import SecuredRoute from "../SecuredRoute/SecuredRoute";
import TagItemServicePage from "../../Pages/TagItemServicePage/TagItemServicePage";
import CommentItem from "../Comments/CommentItem";
import CommentPage from "../../Pages/CommentPage/CommentPage";

export default () => (
    <>

        <Switch>
            <Route exact path="/">
                <LoginPage/>
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

            <Route path="/login">
                <LoginPage/>
            </Route>

            <Route exact path="/tagItemService/:id">
                <TagItemServicePage/>
            </Route>

            <Route exact path="/updateCommentService/:id">
                <CommentItem/>
            </Route>

            <Route exact path="/createCommentPage/:id">
                <CommentPage/>
            </Route>

            <SecuredRoute path="/users" roles={["ADMIN"]}>
                <Users/>
            </SecuredRoute>


        </Switch>
            {/*<h2>Contentas</h2>*/}
            {/*/!*<LoginForm/>*!/*/}
            {/*<TestWithFormkAndYup/>*/}
            {/*<UserRegistration/>*/}


    </>
)