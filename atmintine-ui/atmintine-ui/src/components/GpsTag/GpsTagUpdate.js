import * as Yup from "yup";
import {useTranslation} from "react-i18next";
import {useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {addGpsTag, deleteGpsTag, fetchGPSTagById, updateGpsTag} from "../../api/GpsTagAPI";
import Container from "@material-ui/core/Container";
import {
    CircularProgress,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Paper,
    TableCell,
    TableRow
} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import FormikInput from "../UserLogin/FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import PropsState from "../PropsState/PropsState";


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
    hasShed: Yup.boolean(),
    hasFireplace: Yup.boolean(),
    hasWC: Yup.boolean(),
    hasLakeNearby: Yup.boolean()
})


const GpsTagUpdate = () => {

    const {t} = useTranslation('');
    const {id} = useParams();
    const history = useHistory();

    // 1. susikuriam tago elemento steitą
    const [tagItem, setTagItem] = useState({})
    const [loading, setLoading] = useState(true);


    const initialValues = {
        id:id,
        name: tagItem.name,
        latitude: tagItem.latitude,
        longitude: tagItem.longitude,
        realPlaceName: tagItem.realPlaceName,
        description: tagItem.description,
        hasShed: tagItem.hasShed,
        hasFireplace: tagItem.hasFireplace,
        hasWC: tagItem.hasWC,
        hasLakeNearby: tagItem.hasLakeNearby
    };



    useEffect(() => {
        fetchGPSTagById(id)
            .then(({data}) => {
                setTagItem(data)
            })
            .finally(() => {
                setLoading(false)
            })
    },[])


    const resetFormInfo = (tagItem, {setSubmitting, resetForm}) => {
        setSubmitting(true)
        updateGpsTag(tagItem)
            .then(() => {
                setTagItem(tagItem)
                resetForm()
            })
            .finally(() => setSubmitting(false))
    };



    const deleteGpsTagButtonHandling =(id) =>{
        deleteGpsTag(id)
            .then(() => {
                history.push('/library')
            })
            .finally(console.log("ištrintas"))
    }

    // const deleteGpsTag = (tagItem) => {
    //     deleteGpsTag(tagItem.id)
    //         .finally(
    //             setGpsTagList(gpsTagList.filter(localTag => localTag.id !== tagItem.id))
    //         )
    // }


    return (

        <Formik initialValues={initialValues}
                enableReinitialize
                validationSchema={validationSchema}

                // onSubmit={(values, actions) => {
                //     updateGpsTag(tagItem)
                //         .then(response => response.data)
                //         .finally(() => {actions.setSubmitting(false)
                //
                //         })
                // }}
                onSubmit={resetFormInfo}


        >

            {/*TODO reikia sutvarkyti checkboxus*/}

            {props => (
                <>

                    <Container maxWidth={"sm"}>
                        {loading ?
                            <TableRow>
                                <TableCell colSpan={2} align="center">
                                    <CircularProgress/>
                                </TableCell>
                            </TableRow> :

                            <Paper elevation={3}>
                                <Form style={{margin: 20, padding: 10}}>
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

                                    {/*Čia reikia tiesiog savo susigeneruoti formas */}
                                    <div>
                                        <FormControl
                                            error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                            fullWidth>
                                            <InputLabel htmlFor="hasShed">"Has Shed"</InputLabel>
                                            <Field id="hasShed"
                                                   name="hasShed"
                                                   placeholder="Has Shed"
                                                // type="checkbox"
                                                   {...props} as={Input}
                                            />
                                            <ErrorMessage name="hasShed" component={FormHelperText}/>
                                        </FormControl>
                                    </div>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>

                                    {/*<div>*/}
                                    {/*    <FormikInput name="hasShed"*/}
                                    {/*                 label="Has Shed"*/}
                                    {/*                 error={props.touched.repeatPassword && !!props.errors.repeatPassword}*/}
                                    {/*                 placeholder="Has Shed"*/}
                                    {/*                 type="checkbox"*/}
                                    {/*    />*/}
                                    {/*</div>*/}

                                    <div>
                                        <FormikInput name="hasFireplace"
                                                     label="Has Fireplace"
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder="Has Fireplace"
                                            // type="checkbox"
                                        />
                                    </div>

                                    <div>
                                        <FormikInput name="hasWC"
                                                     label="Has WC"
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder="Has WC"
                                            // type="checkbox"
                                        />
                                    </div>

                                    <div>
                                        <FormikInput name="hasLakeNearby"
                                                     label="Has Lake Nearby"
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder="Has Lake Nearby"
                                            // type="checkbox"
                                        />
                                    </div>
                                    <div style={{padding: 10}}>
                                        {!props.isSubmitting ?
                                            <Button variant="contained"
                                                    color="primary"
                                                    type="submit"
                                            >Update</Button>
                                            :
                                            <span>Submitting...</span>}

                                        {!props.isSubmitting ?
                                            <Button variant="outlined"
                                                    color="primary"
                                                    onClick={() => deleteGpsTagButtonHandling(id)}>Delete
                                            </Button>
                                            :""

                                        }

                                    </div>
                                </Form>
                            </Paper>
                        }
                    </Container>
                </>
            )}
        </Formik>


    )
}

export default GpsTagUpdate
