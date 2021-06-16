import {Box, CircularProgress, TableCell, TableRow, TextareaAutosize} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useParams} from "react-router-dom";
import {addComment} from "../../api/CommentsApi";
import {fetchGPSTagById, fetchGpsTags, updateGpsTag} from "../../api/GpsTagAPI";
import Container from "@material-ui/core/Container";




const AddCommentForTagItem = () => {

    const loggedInUser  = useSelector(state => state.user.loggedInUser)
    const {t} = useTranslation('');
    const {id} = useParams();
    const history = useHistory();

    const [textAreaContent,setTextAreaContent] = useState("")
    const [comment, setComment]=useState({})
    const [tagItemFetched,setTagItemFetched] =useState({})
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchGPSTagById(id)
            .then(({data}) =>
                setTagItemFetched(data))
            .finally(() => console.log("Užfetcino"))
        // .catch(error => console.log("error",error))
    }, [])

    const addCommentHandler =() =>{

        addComment(comment)
            .then(() => {
                setLoading(true)
                setComment({
                    username: loggedInUser.username,
                    content: textAreaContent,
                    tagItem: tagItemFetched
                })



            })
            .finally(() => {
                history.push("/tagItemService/" + id)
                console.log("Hystory turėjo suveikti")

                setLoading(false)
            })

    }


    // const emptyText = () => (
    //     <TextareaAutosize
    //         aria-label="minimum height"
    //         rowsMin={10}
    //         placeholder="Write new comment here"
    //         style ={{width: '100%'}}
    //         inputStyle ={{width: '100%'}}
    //         onChange={event => setTextAreaContent(event.target.value)}
    //     />
    // )


    return (
        <>

            {/*<h1>Blogo itemo id: {id}</h1>*/}
            {/*<h2>useris: {loggedInUser?.username}</h2>*/}
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
            {/*            style ={{width: '100%'}}*/}
            {/*            inputStyle ={{width: '100%'}}*/}
            {/*            onChange={event => setTextAreaContent(event.target.value)}*/}
            {/*        />*/}
            {/*}*/}

            {/*<Button color="primary"*/}
            {/*        variant="contained"*/}
            {/*        to={"/tagItemService/" + id}*/}
            {/*        onClick={() => addCommentHandler()}*/}
            {/*>Submit</Button>*/}

        </>
    )
}
export default AddCommentForTagItem