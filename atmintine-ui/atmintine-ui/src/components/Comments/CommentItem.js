import {Box, Grid, Paper, TextField} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import {Link as RouterLink, useHistory, useParams} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useTranslation} from "react-i18next";
import {addComment, deleteComment, fetchComment, fetchComments, updateComment} from "../../api/CommentsApi";
import {Form, Formik} from "formik";
import FormikInput from "../UserLogin/FormikInput/FormikInput";
import {fetchGPSTagById, updateGpsTag} from "../../api/GpsTagAPI";
import * as Yup from "yup";
import {useSelector} from "react-redux";


const CommentItem = ({author, content}) => {

    const {t} = useTranslation('comments');
    const {id} = useParams();
    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState({})


    useEffect(() => {
        fetchComment(id)
            .then(({data}) => {
                setComment(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    const initialValues = {
        id: comment.id,
        username: comment.username,
        content: comment.content,
        tagItem: comment.tagItem
    };

    console.log(initialValues)

    const resetFormInfo = (comment, {setSubmitting, resetForm}) => {
        setSubmitting(true)
        updateComment(comment)
            .then(() => {
                setComment(comment)
                resetForm()
            })
            .finally(() => setSubmitting(false))
    };

    const goBack = () => {
        history.push("/tagItemService/" + initialValues.tagItem.id)
    }

    return (
        <>
            <Formik initialValues={initialValues}
                    enableReinitialize
                    onSubmit={resetFormInfo}
            >
                {props => (
                    <>
                        <Container maxWidth="sm">
                            <Paper elevation={3}>
                                <Box p={2}>
                                    <Form>
                                        <div>
                                            <h3>{comment.username}</h3>
                                        </div>

                                        <div>
                                            <FormikInput name="content" label="Contetn"
                                                         error={props.touched.content && !!props.errors.content}
                                                         multiline rows={6}/>
                                        </div>

                                        <Grid align="center" container justify="center" alignItems="center">
                                            <Grid item>
                                                {!props.isSubmitting ?
                                                    <Button color="primary"
                                                            variant="contained"
                                                            type="submit">{t('UpdateComment')}</Button> :
                                                    <span>Submitting...</span>}

                                                <Button color="primary"
                                                        variant="contained"
                                                        onClick={() => goBack()}
                                                >{t('goBackToLibrary')}</Button>
                                            </Grid>

                                        </Grid>
                                    </Form>
                                </Box>
                            </Paper>
                        </Container>
                    </>
                )}
            </Formik>
        </>
    )
}

export default CommentItem