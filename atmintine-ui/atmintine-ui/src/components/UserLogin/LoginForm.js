// import React from 'react';
// import Formik from "formik";
import {Formik} from "formik"

export default () =>(
    // <div>Formic test</div>
    <Formik
        initialValues={{name: ''}}
        onSubmit={(values, helpers) => {
            console.log('values', values)
            console.log('helpers', helpers)

            helpers.setSubmitting(true)
            setTimeout(()=>{
                helpers.setSubmitting(false)
            },3000)

    }}>

        {props => {
            // Čia tiesiog helperis pasižiūrėti kas yra renderyje
            // console.log("render props", props)
            return (
            <form onSubmit={props.handleSubmit}>
            <label htmlFor="name"/>
            <input id="name" onChange={props.handleChange}/>

                {!props.isSubmitting ? <button type="submit">Submit</button> : <span>Submiting...</span>}


            </form>

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



