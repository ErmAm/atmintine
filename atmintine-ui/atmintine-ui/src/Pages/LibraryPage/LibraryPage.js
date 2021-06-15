import {useParams} from "react-router-dom";
import LibraryFiller from "../../components/LibraryFiller/LibraryFiller";
import {Box, Container} from "@material-ui/core";

const LibraryPage = () => {
    let {id} = useParams();

    return (<>

        <Box m={2} pt={3}>
            <LibraryFiller/>
        </Box>



        </>
    )
}

export default LibraryPage