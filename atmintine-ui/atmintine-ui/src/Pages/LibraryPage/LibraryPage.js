import {useParams} from "react-router-dom";
import LibraryFiller from "../../components/LibraryFiller/LibraryFiller";
import {Box, Container} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const LibraryPage = () => {
    let {id} = useParams();
    const {t} = useTranslation('globalsPage');

    return (<>

        <Box m={2} pt={3}>
            <LibraryFiller/>
        </Box>



        </>
    )
}

export default LibraryPage