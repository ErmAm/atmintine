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
import IntroPage from "../../Pages/IntroPage/IntroPage";

export default () => (
    <>

        <Switch>
            <Route exact path="/">
                <IntroPage/>
            </Route>

            <SecuredRoute exact path="/library" roles={["ADMIN","USER"]}>
                <LibraryPage/>
            </SecuredRoute>

            <SecuredRoute exact path="/profile" roles={["ADMIN","USER"]}>
                <ProfilePage/>
            </SecuredRoute>

            <Route exact path="/registration">
                <RegistrationPage/>
            </Route>

            <SecuredRoute path="/library/:id" roles={["ADMIN","USER"]}>
                <LibraryPage/>
            </SecuredRoute>

            <Route path="/login">
                <LoginPage/>
            </Route>

            <SecuredRoute exact path="/tagItemService/:id" roles={["ADMIN","USER"]}>
                <TagItemServicePage/>
            </SecuredRoute>

            <SecuredRoute exact path="/updateCommentService/:id" roles={["ADMIN","USER"]}>
                <CommentItem/>
            </SecuredRoute>

            <SecuredRoute exact path="/createCommentPage/:id" roles={["ADMIN","USER"]}>
                <CommentPage/>
            </SecuredRoute>

            <SecuredRoute path="/users" roles={["ADMIN"]}>
                <Users/>
            </SecuredRoute>

        </Switch>

    </>
)