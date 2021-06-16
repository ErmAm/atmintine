import React, {useEffect, useState} from "react";
import {fetchGPSTagById, fetchGpsTags} from "../../api/GpsTagAPI";
import {addComment, deleteComment, fetchCommentsByID} from "../../api/CommentsApi";
import {useTranslation} from "react-i18next";
import {Link as RouterLink, useHistory, useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {
    Box,
    CircularProgress,
    Paper,
    TableCell,
    TableRow, TextareaAutosize
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Content from "../Content/Content";
import CommentItem from "./CommentItem";
import AddCommentForTagItem from "./AddCommentForTagItem";
import {bool} from "yup";
import {useSelector} from "react-redux";


const CommentFiller = () => {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const [commentsList, setCommentsList] = useState([])
    const [tagItemFetched, setTagItemFetched] = useState({})
    const [comment, setComment] = useState({})
    const [textAreaContent, setTextAreaContent] = useState("")
    const [loading, setLoading] = useState(true)


    const {t} = useTranslation('comments');
    const {id} = useParams();
    const history = useHistory();


    useEffect(() => {
        fetchCommentsByID(id)
            .then(({data}) =>
                setCommentsList(data))
            .finally(() => setLoading(false))

        fetchGPSTagById(id)
            .then(({data}) =>
                setTagItemFetched(data))

    }, [])

    const newCommentHandler = () => {
        history.push("/createCommentPage/" + id)
    }

    const updateCommentHandler = (id) => {
        history.push("/updateCommentService/" + id)
    }


    const deleteCommentHandler = (idToDelete) => {
        deleteComment(idToDelete)
            .then(() => {
                fetchCommentsByID(id).then(({data}) =>
                    setCommentsList(data))
                    .finally(() => setLoading(false))
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Container maxWidth="sm">
                <h1>{t('CommentsMain')}</h1>
                <Button color="primary"
                        variant="contained"
                        onClick={() => newCommentHandler()}
                >{t('NewComment')}</Button>

                {loading ?
                    <TableRow>
                        <TableCell colSpan={12} align="center">
                            <CircularProgress/>
                        </TableCell>
                    </TableRow> :
                    commentsList.map(comment => (
                        <Box>
                            <Paper m={10} p={10}>
                                <h4>{comment.username}</h4>
                                <p id="commentContent">
                                    {comment.content}
                                </p>
                            </Paper>
                            <Button color="primary"
                                    variant="contained"
                                    to={"/updateCommentService/" + comment.id}
                                    onClick={() => updateCommentHandler(comment.id)}
                            >{t('NewComment')}</Button>

                            <Button color="primary"
                                    variant="contained"
                                    onClick={() => deleteCommentHandler(comment.id)}
                            >{t('DeleteComment')}
                            </Button>
                        </Box>
                    ))
                }
            </Container>
        </>
    )
}

export default CommentFiller