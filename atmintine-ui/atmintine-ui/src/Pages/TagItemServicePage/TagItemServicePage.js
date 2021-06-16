import {useTranslation} from "react-i18next";
import GpsTagForm from "../../components/GpsTagForm/GpsTagForm";
import {useParams} from "react-router-dom";
import GpsTagUpdate from "../../components/GpsTag/GpsTagUpdate";
import {Box} from "@material-ui/core";
import CommentFiller from "../../components/Comments/CommentFiller";




const TagItemServicePage = () => {

    const {t} = useTranslation('');

    const {id} = useParams()



    return (
        <>
            <Box m={2} pt={3}>



                <GpsTagUpdate commonProps={id}/>
                <CommentFiller commonProps={id}/>
            </Box>


        </>
    )

};

export default TagItemServicePage
