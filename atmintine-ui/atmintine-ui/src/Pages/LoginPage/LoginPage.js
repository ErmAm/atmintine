import GpsTagForm from "../../components/GpsTagForm/GpsTagForm";
import {login} from "../../api/loginApi";

import {Form, Formik} from "formik"

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormikInput from "../../components/UserLogin/FormikInput/FormikInput";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import {login as setLogin} from '../../store/slices/userSlice'


const LoginPage = () => {

    //Dispačerio reikia
    const dispatch = useDispatch()
    const history = useHistory()


    const postLogin = (loginData, {setSubmitting}) => {
        setSubmitting(true)

        login(loginData)
            .then(({data: loggedInUser, headers: {authorization}}) => {
                // console.log("JWT", authorization)
                // console.log("JWT users: ", loggedInUser)
                // console.log("JWT autorizacijos headeris: ", authorization)
                dispatch(
                    setLogin({
                        loggedInUser,
                        jwt:authorization}))

            //  1.1  po sėkmingo loginor eikia iškviesti redirecto funckiją.
            history.push('/')

            })
            .finally(() => setSubmitting(false))
    }

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            onSubmit={postLogin}
        >
            {(props) => (
                <>
                    <Container maxWidth="sm">
                        <Form>
                            <div>
                                <FormikInput name="username"
                                             label="Username"/>
                            </div>
                            <div>
                                <FormikInput name="password"
                                             label="Password"
                                             type="password"/>
                            </div>

                            <Button variant="contained"
                                    fullWidth
                                    color="primary"
                                    type="submit"
                                    disabled={props.isSubmitting}>Submit</Button>
                        </Form>
                    </Container>
                </>
            )}
        </Formik>
    )
}

export default LoginPage