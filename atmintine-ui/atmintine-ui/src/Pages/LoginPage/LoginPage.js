import GpsTagForm from "../../components/GpsTagForm/GpsTagForm";
import {login} from "../../api/loginApi";

import {Form, Formik} from "formik"

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormikInput from "../../components/UserLogin/FormikInput/FormikInput";
import {useDispatch} from "react-redux";
import {useHistory,useLocation} from "react-router-dom";

import {login as setLogin} from '../../store/slices/userSlice'
import {useTranslation} from "react-i18next";

const LoginPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const {t} = useTranslation('globalsPage');


    const postLogin = (loginData, {setSubmitting}) => {
        setSubmitting(true)
        login(loginData)
            .then(({data: loggedInUser, headers: {authorization}}) => {
                dispatch(
                    setLogin({
                        loggedInUser,
                        jwt:authorization}))

                const from = location.state?.from

                history.push(from || '/')

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
                                             label={t('gUsername')}/>
                            </div>
                            <div>
                                <FormikInput name="password"
                                             label={t('Password')}
                                             type="password"/>
                            </div>

                            <Button variant="contained"
                                    fullWidth
                                    color="primary"
                                    type="submit"
                                    disabled={props.isSubmitting}>{t('gSubmit')}</Button>
                        </Form>
                    </Container>
                </>
            )}
        </Formik>
    )
}

export default LoginPage