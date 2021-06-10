// import React from 'react';
// import Formik from "formik";
import {Form, Formik, Field, ErrorMessage} from "formik"
import {Input, TextField} from "@material-ui/core";
import PropsState from "../../PropsState/PropsState";
import * as Yup from "yup";

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
                <Form>

                    <div>
                        <label htmlFor="name">Product title:</label>
                        <Field id="name" name="name" placeholder="Type..."/>
                        <ErrorMessage name="name" component="span"/>
                    </div>

                    <div>
                        <label htmlFor="price">Product price:</label>
                        <Field id="price" name="price" placeholder="Type..."/>
                        <ErrorMessage name="price" component="span"/>
                    </div>

                    <div>
                        <label htmlFor="quantity">Product quantity:</label>
                        <Field id="quantity" name="quantity" placeholder="Type..."/>
                        <ErrorMessage name="quantity" component="span"/>
                    </div>

                    <div>
                        <label htmlFor="description">Product quantity:</label>
                        <Field id="description" name="description" placeholder="Type..." component="textarea"/>
                        <ErrorMessage name="description" component="span"/>
                    </div>



                    {/*<label htmlFor="name"/>*/}

                    {/*<Field id="name" name="name" placeholder="Type..."/>*/}
                    {/*<ErrorMessage name="name" component="div"/>*/}

                    {!props.isSubmitting ? <button type="submit">Submit</button> :
                        <span>Submitting...</span>}
                </Form>
                </>
        )}

    </Formik>


)



