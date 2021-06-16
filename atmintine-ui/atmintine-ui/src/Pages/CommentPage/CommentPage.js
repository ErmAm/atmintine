import {Form, Formik} from "formik";
import Container from "@material-ui/core/Container";
import {Box, Grid, Paper} from "@material-ui/core";
import FormikInput from "../../components/UserLogin/FormikInput/FormikInput";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useHistory, useParams} from "react-router-dom";
import {addComment, fetchComment} from "../../api/CommentsApi";
import {fetchGPSTagById} from "../../api/GpsTagAPI";
import {useSelector} from "react-redux";

const CommentPage = () => {

    const {t} = useTranslation('globalsPage');
    const {id} = useParams();
    const history = useHistory();


    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const [comment, setComment] = useState({})
    const [tagItemFetched, setTagItemFetched] = useState({})

    useEffect(() => {
        fetchGPSTagById(id)
            .then(({data}) =>
                setTagItemFetched(data))
    },[])


    const initialValues = {
        id:"",
        username: loggedInUser.username,
        content: "",
        tagItem: tagItemFetched
    };

    const createNewComment=(comment,{setSubmitting, resetForm})=>{
        setSubmitting(true)
        addComment(comment)
            .then(() => {
                history.push("/tagItemService/" + tagItemFetched.id)
            })
            .finally(() => setSubmitting(false))
    }



    return (
        <>
            <Formik initialValues={initialValues}
                    enableReinitialize
                    onSubmit={createNewComment}
            >
                {props => (
                    <>

                        <Container maxWidth="sm" >
                            <Paper elevation={3}>
                                <Box p={2}>
                                    <Form>

                                        <div>
                                            <h3>{loggedInUser.username}</h3>
                                        </div>

                                        <div>
                                            <FormikInput name="content" label="Contetn"
                                                         error={props.touched.content && !!props.errors.content}
                                                         multiline rows={6}/>
                                        </div>



                                        <Grid align="center" container justify="center" alignItems="center">
                                            <Grid item>
                                                {!props.isSubmitting ?
                                                    <Button color="primary" variant="contained" type="submit">{t('gNewComment')}
                                                    </Button> :
                                                    <span>{t('gSubmit')}</span>}

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

export default CommentPage