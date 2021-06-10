import {useParams} from "react-router-dom";
import LibraryFiller from "../../components/LibraryFiller/LibraryFiller";

const LibraryPage = () => {
    let {id} = useParams();

    return (<>
            <h1>This is library page</h1>
            <h2>ID: {id}</h2>

            <LibraryFiller/>

        </>
    )
}

export default LibraryPage