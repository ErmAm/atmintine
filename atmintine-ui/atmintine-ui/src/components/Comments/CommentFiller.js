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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
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


    const {t} = useTranslation('');
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
            // .finally(() => console.log("Užfetcino"))


    }, [])

    // const addCommentHandler = () => {
    //     console.log("Išspausdinti tag itema: " + tagItemFetched.id)
    //     console.log("Išspausdinti tekstoTurinį: " + textAreaContent)
    //     console.log("Išspausdinti vartotohą: " + loggedInUser.username)
    //
    //
    //     setComment({
    //         username: loggedInUser.username,
    //         content: textAreaContent,
    //         tagItem: tagItemFetched
    //     })
    //
    //     console.log("Komentaro objektas: " + comment)
    //     addComment(comment)
    //         .then(() => {
    //                     setLoading(true)
    //             history.push("/tagItemService/" + id)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }

    const newCommentHandler = () => {
        history.push("/createCommentPage/" + id)
    }

    const updateCommentHandler = (id)=>{
        history.push("/updateCommentService/" + id)
    }


    // const addCommentHandler = () => {
    //
    //     addComment(comment)
    //         .then(() => {
    //             setLoading(true)
    //             setComment({
    //                 username: loggedInUser.username,
    //                 content: textAreaContent,
    //                 tagItem: tagItemFetched
    //             })
    //
    //
    //         })
    //         .finally(() => {
    //             history.push("/tagItemService/" + id)
    //             console.log("Hystory turėjo suveikti")
    //
    //             setLoading(false)
    //         })
    //
    // }


    console.log(commentsList)

    const deleteCommentHandler = (idToDelete) => {
        console.log("Ištrinta: " + idToDelete)
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

            {/*<CommentItem comentID={comment.id}/>*/}


            <Container maxWidth="sm">
                <h1>Comments</h1>

                {/*{*/}
                {/*    loading ?*/}
                {/*        <TableRow>*/}
                {/*            <TableCell colSpan={2} align="center">*/}
                {/*                <CircularProgress/>*/}
                {/*            </TableCell>*/}
                {/*        </TableRow> :*/}
                {/*        <TextareaAutosize*/}
                {/*            aria-label="minimum height"*/}
                {/*            rowsMin={10}*/}
                {/*            placeholder="Write new comment here"*/}
                {/*            style={{width: '100%'}}*/}
                {/*            onChange={event => setTextAreaContent(event.target.value)}*/}
                {/*        />*/}
                {/*}*/}
                <Button color="primary"
                        variant="contained"
                    // to={"/tagItemService/" + id}
                        onClick={() => newCommentHandler()}
                >Create New Comment</Button>


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
                            >Update</Button>

                            <Button color="primary"
                                    variant="contained"
                                    onClick={() => deleteCommentHandler(comment.id)}
                            >Delete
                            </Button>
                        </Box>

                    ))
                }
            </Container>
        </>
    )
}

export default CommentFiller