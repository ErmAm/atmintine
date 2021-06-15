import {useTranslation} from "react-i18next";
import GpsTagForm from "../../components/GpsTagForm/GpsTagForm";
import {useParams} from "react-router-dom";
import GpsTagUpdate from "../../components/GpsTag/GpsTagUpdate";
import {Box} from "@material-ui/core";



const TagItemServicePage = () => {

    const {t} = useTranslation('');

    const {id} = useParams()

    // const commonProps = {id};

    return (
        <>
            <h4> DEBUG Atiisustas id {id}</h4>

            <Box m={2} pt={3}>
            <GpsTagUpdate commonProps={id}/>
            </Box>


        </>
    )

};

export default TagItemServicePage
