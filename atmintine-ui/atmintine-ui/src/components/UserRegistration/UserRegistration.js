import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import FormikInput from "../UserLogin/FormikInput/FormikInput";

import {createUser} from '../../api/UserAPI'


const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(3)
        .required(),
    name: Yup.string()
        .required(),
    surname: Yup.string()
        .required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(5)
        .required(),
    repeatPassword: Yup.string()
        .min(5)
        .required()
        .oneOf([Yup.ref('password')], "Blogas")
})

export default () => (
    <Formik initialValues={{
        username: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        repeatPassword: '',
        roles:[{
            id: '',
            name: '',
            authority: ''},]
    }}
            validationSchema={validationSchema}

    onSubmit={(values,actions) =>{
        createUser(values)
            .then(response => response.data)
            .catch(error =>console.log("Klaidos", error))
            .finally(()=>actions.setSubmitting(false))

    }}




    >
        {props => (
            <>

                <Container maxWidth={"sm"}>
                    <Paper elevation={3}>
                        <Form style={{margin: 20, padding:10}}>
                            <div>
                                <FormikInput name="username"
                                             label="Username"
                                             error={props.touched.name && !!props.errors.name}
                                             placeholder="Username"/>
                            </div>
                            <div>
                                <FormikInput name="name"
                                             label="Name"
                                             error={props.touched.name && !!props.errors.name}
                                             placeholder="Name"/>
                            </div>
                            <div>
                                <FormikInput name="surname"
                                             label="Surname"
                                             error={props.touched.surname && !!props.errors.surname}
                                             placeholder="Surname"/>
                            </div>
                            <div>
                                <FormikInput name="email"
                                             label="Email"
                                             error={props.touched.email && !!props.errors.email}
                                             placeholder="Email"/>
                            </div>
                            <div>
                                <FormikInput name="password"
                                             label="Password"
                                             error={props.touched.password && !!props.errors.password}
                                             placeholder="Password"
                                             type="password"/>
                            </div>
                            <div >
                                <FormikInput name="repeatPassword"
                                             label="RepeatPassword"
                                             error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                             placeholder="repeatPassword"
                                             type="password"
                                             />
                            </div>
                            <div style={{padding: 10}}>
                            {!props.isSubmitting ?
                                <Button variant="contained"
                                        color="primary"
                                        type="submit"
                                        >Submit</Button>
                                :
                                <span>Submitting...</span>}
                            </div>
                        </Form>
                    </Paper>
                </Container>
            </>
        )}
    </Formik>
)