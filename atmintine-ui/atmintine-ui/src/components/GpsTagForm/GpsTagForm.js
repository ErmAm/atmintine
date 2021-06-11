import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import FormikInput from "../UserLogin/FormikInput/FormikInput";

import {addGpsTag} from '../../api/GpsTagAPI'


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3)
        .required(),
    latitude: Yup.string()
        .required(),
    longitude: Yup.string()
        .required(),
    realPlaceName: Yup.string(),
    description: Yup.string(),
    hasShed: Yup.bool(),
    hasFireplace: Yup.string(),
    hasWC: Yup.string(),
    hasLakeNearby: Yup.string(),

})

export default () => (
    <Formik initialValues={{
        name: '',
        latitude: '',
        longitude: '',
        realPlaceName: '',
        description: '',
        hasShed: false,
        hasFireplace: false,
        hasWC: false,
        hasLakeNearby: false

    }}
            validationSchema={validationSchema}


        //Submitas logika
        // TODO čia vyksta submitas formos

            onSubmit={(values,actions) =>{
                addGpsTag(values)
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
                                <FormikInput name="name"
                                             label="Name"
                                             error={props.touched.name && !!props.errors.name}
                                             placeholder="Name"/>
                            </div>
                            <div>
                                <FormikInput name="latitude"
                                             label="Latitude"
                                             error={props.touched.name && !!props.errors.name}
                                             placeholder="Latitude"/>
                            </div>
                            <div>
                                <FormikInput name="longitude"
                                             label="Longitude"
                                             error={props.touched.surname && !!props.errors.surname}
                                             placeholder="Longitude"/>
                            </div>
                            <div>
                                <FormikInput name="realPlaceName"
                                             label="Real Place Name"
                                             error={props.touched.email && !!props.errors.email}
                                             placeholder="Real Place Name"/>
                            </div>
                            <div>
                                <FormikInput name="description"
                                             label="Description"
                                             error={props.touched.password && !!props.errors.password}
                                             placeholder="Description"
                                             // type="password"
                                />
                            </div>
                            <div >
                                <FormikInput name="hasShed"
                                             label="Has Shed"
                                             error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                             placeholder="Has Shed"
                                             // type="password"
                                />
                            </div>

                            <div >
                                <FormikInput name="hasFireplace"
                                             label="Has Fireplace"
                                             error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                             placeholder="Has Fireplace"
                                    // type="password"
                                />
                            </div>

                            <div >
                                <FormikInput name="hasWC"
                                             label="Has WC"
                                             error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                             placeholder="Has WC"
                                    // type="password"
                                />
                            </div>

                            <div >
                                <FormikInput name="hasLakeNearby"
                                             label="Has Lake Nearby"
                                             error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                             placeholder="Has Lake Nearby"
                                    // type="password"
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