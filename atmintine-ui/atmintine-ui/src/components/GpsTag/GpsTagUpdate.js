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

    const {t} = useTranslation('gpsTags');
    const {id} = useParams();
    const history = useHistory();

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
    }

    console.log(tagItem)

    return (

        <Formik initialValues={initialValues}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={resetFormInfo}>

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
                                                     label={t('fName')}
                                                     error={props.touched.name && !!props.errors.name}
                                                     placeholder={t('fName')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="latitude"
                                                     label={t('fLatitude')}
                                                     error={props.touched.name && !!props.errors.name}
                                                     placeholder={t('fLatitude')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="longitude"
                                                     label={t('fLongitude')}
                                                     error={props.touched.surname && !!props.errors.surname}
                                                     placeholder={t('fLongitude')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="realPlaceName"
                                                     label={t('fRealPlaceName')}
                                                     error={props.touched.email && !!props.errors.email}
                                                     placeholder={t('fRealPlaceName')}/>
                                    </div>
                                    <div>
                                        <FormikInput name="description"
                                                     label={t('fDescription')}
                                                     error={props.touched.password && !!props.errors.password}
                                                     placeholder={t('fDescription')}/>
                                    </div>

                                    <div>
                                        <FormControl
                                            error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                            fullWidth>
                                            <InputLabel htmlFor="hasShed">{t('fHasShed')}</InputLabel>
                                            <Field id="hasShed"
                                                   name="hasShed"
                                                   placeholder={t('fHasShed')}
                                                   {...props} as={Input}
                                            />
                                            <ErrorMessage name="hasShed" component={FormHelperText}/>
                                        </FormControl>
                                    </div>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>

                                    <div>
                                        <FormikInput name="hasFireplace"
                                                     label={t('fHasFireplace')}
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder={t('fHasFireplace')}/>
                                    </div>

                                    <div>
                                        <FormikInput name="hasWC"
                                                     label={t('fHasWC')}
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder={t('fHasWC')}/>
                                    </div>

                                    <div>
                                        <FormikInput name="hasLakeNearby"
                                                     label={t('fHasLakeNearby')}
                                                     error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                     placeholder={t('fHasLakeNearby')}/>
                                    </div>
                                    <div style={{padding: 10}}>
                                        {!props.isSubmitting ?
                                            <Button variant="contained"
                                                    color="primary"
                                                    type="submit"
                                            >{t('fUpdateTag')}</Button>
                                            :
                                            <span>Submitting...</span>}

                                        {!props.isSubmitting ?
                                            <Button variant="outlined"
                                                    color="primary"
                                                    onClick={() => deleteGpsTagButtonHandling(id)}>{t('fDeleteTag')}
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
