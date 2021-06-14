import GpsTagForm from "../../components/GpsTagForm/GpsTagForm";
import {login} from "../../api/loginApi";

import {Form, Formik} from "formik"

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormikInput from "../../components/UserLogin/FormikInput/FormikInput";

const LoginPage = () => {
    const postLogin = (loginData, {setSubmitting}) => {
        setSubmitting(true)

        login(loginData)
            .then(({headers: {authorization}}) => {
                console.log("JWT", authorization)
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