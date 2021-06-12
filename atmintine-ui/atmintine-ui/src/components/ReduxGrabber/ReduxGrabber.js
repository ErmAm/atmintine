import {useSelector} from "react-redux";
import tagItem from "../../store/slices/tagItemSlice";


const ReduxGrabber = () => {

    //čia hooksas kuris traukia info.
    const tagList = useSelector(state => state.tagItem)

    return (
        <>
            <h3> I am redux grabber</h3>
            <pre>
                {JSON.stringify(tagList, null,2)}
            </pre>



        </>
    )
}

export default ReduxGrabber