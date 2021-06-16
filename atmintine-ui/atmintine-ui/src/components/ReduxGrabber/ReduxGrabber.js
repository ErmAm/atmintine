import {useSelector} from "react-redux";
import tagItem from "../../store/slices/tagItemSlice";


const ReduxGrabber = () => {

    const tagList = useSelector(state => state.tagItem)

    return (
        <>
            <h3> Work in progress</h3>
            <pre>
                {JSON.stringify(tagList, null,2)}
            </pre>
        </>
    )
}

export default ReduxGrabber