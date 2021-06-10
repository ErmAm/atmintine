import {fetchGpsTags} from '../../api/GpsTagAPI'
import {useEffect} from "react";

const LibraryFiller = () => {

    useEffect(()=>{
        fetchGpsTags().then(response => console.log("response", response))
            .catch(error => console.log("error",error))
        }
    )


    return(
        <>
            <h1>I am librarry filler component</h1>

        </>
    )

}

export default LibraryFiller