// import React from 'react';
// import Formik from "formik";
import {Form, Formik, Field, ErrorMessage} from "formik"
import {TextField} from "@material-ui/core";

export default () => (
    // <div>Formic test</div>
    <Formik
        initialValues={{name: ''}}
        onSubmit={(values, helpers) => {
            console.log('values', values)
            console.log('helpers', helpers)

            helpers.setSubmitting(true)
            setTimeout(() => {
                helpers.setSubmitting(false)
            }, 3000)
        }}

        validate={values => {
            const errors = {}

            if (values.name.length < 5) {
                errors.name = "Kažkas labai neveikia"
            }

            return errors
        }}

    >

        {props => {
            // Čia tiesiog helperis pasižiūrėti kas yra renderyje
            // console.log("render props", props)
            return (
                // <form onSubmit={props.handleSubmit}>
                <Form>
                    <label htmlFor="name"/>
                    {/*<input id="name" onChange={props.handleChange}/>*/}
                    <Field id="name" name="name" placeholder="Type..." component={TextField}/>
                    <ErrorMessage name="name" component="div"/>


                    <Field id="language" name="language" component="select">
                        <option>Lietuvių</option>
                        <option>English</option>
                    </Field>
                    <p></p>

                    {!props.isSubmitting ? <button type="submit">Submit</button> :
                        <span>Submitting...</span>}

                </Form>

            )


        }}


    </Formik>

    //     initialValues={{ name: 'jared' }}
    //     onSubmit={(values, actions) => {
    //         setTimeout(() => {
    //             alert(JSON.stringify(values, null, 2));
    //             actions.setSubmitting(false);
    //         }, 1000);
    //     }}
    // >
    //     {props => (
    //         <form onSubmit={props.handleSubmit}>
    //             <input
    //                 type="text"
    //                 onChange={props.handleChange}
    //                 onBlur={props.handleBlur}
    //                 value={props.values.name}
    //                 name="name"
    //             />
    //             {props.errors.name && <div id="feedback">{props.errors.name}</div>}
    //             <button type="submit">Submit</button>
    //         </form>
    //     )}

)



