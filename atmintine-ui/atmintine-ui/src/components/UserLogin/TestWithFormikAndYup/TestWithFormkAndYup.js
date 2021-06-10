// import React from 'react';
// import Formik from "formik";
import {Form, Formik, Field, ErrorMessage} from "formik"
import {Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper, TextField} from "@material-ui/core";
import PropsState from "../../PropsState/PropsState";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import FormikInput from "../FormikInput/FormikInput";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Reiksme turi buti ilgesne nei 2 simboliai")
        .required(),
    price: Yup.number()
        .positive()
        .required(),
    quantity: Yup.number()
        .positive()
        .required(),
    description: Yup.string()
        .max(100)
})


export default () => (
    // <div>Formic test</div>
    <Formik
        initialValues={{
            name: '',
            price: '',
            quantity: '',
            description: ''

        }}
        onSubmit={(values, helpers) => {
            console.log('values', values)
            console.log('helpers', helpers)

            helpers.setSubmitting(true)
            setTimeout(() => {
                helpers.setSubmitting(false)
            }, 3000)
        }}

        validationSchema={validationSchema}
    >

        {props => (
            <>
                {/*TODO Čia debugas.*/}
                <PropsState{...props}/>

                <Container maxWidth={"sm"}>
                    <Paper elevation={3}>
                    <Form style={{margin: 20, padding: 10}}>

                        <div>
                            <FormikInput name="name" label="Product name"
                                         error={props.touched.name && !!props.errors.name}/>
                        </div>

                        <div>
                            <FormikInput name="price" label="Product price"
                                         error={props.touched.price && !!props.errors.price}/>
                        </div>

                        <div>
                            <FormikInput name="quantity" label="Product quantity"
                                         error={props.touched.quantity && !!props.errors.quantity}/>
                        </div>

                        <div>
                            <FormikInput name="description" label="Product description"
                                         error={props.touched.description && !!props.errors.description}
                                         multiline rows={3}/>
                        </div>

                        {/*<Grid container={3}>*/}
                        {/*    <Grid item xs={3}>*/}

                                {!props.isSubmitting ? <Button variant="contained"
                                                               color="primary"
                                                               type="submit">Submit</Button> :
                                    <span>Submitting...</span>}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}

                    </Form>
                    </Paper>
                </Container>

            </>
        )}

    </Formik>


)



