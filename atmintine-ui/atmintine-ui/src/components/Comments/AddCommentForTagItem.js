import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useHistory, useParams} from "react-router-dom";
import {addComment} from "../../api/CommentsApi";
import {fetchGPSTagById, fetchGpsTags, updateGpsTag} from "../../api/GpsTagAPI";

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


    return (
        <>



        </>
    )
}
export default AddCommentForTagItem