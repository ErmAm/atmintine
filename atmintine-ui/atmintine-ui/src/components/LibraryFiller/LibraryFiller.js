import {fetchGpsTags} from '../../api/GpsTagAPI'
import {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addToTagItemList} from "../../store/slices/tagItemSlice";



// 1.1 susikuriam stiliuko f-ja
// TODO nežinau ar čia reikia šito
const useStyle = makeStyles({
    table: {
        maxWidth: 650
    }
})

// props = { addToCart: addToCart }
// tunedAddToCart = (product) => dispatch(addToCart(product))
// const Products = ({ tunedAddToCart }) => {



const LibraryFiller = ({addToTagItemList}) => {

    const [gpsTagList, setGpsTagList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchGpsTags()
            .then(({data}) =>
                setGpsTagList(data))
            .finally(() => setLoading(false))
        // .catch(error => console.log("error",error))
    }, [])


    // 1.1 Išsikviečiam stiliuko f-ja.
    const classes = useStyle()


    const handleOnClick = (tagItem) => {
        addToTagItemList(tagItem)
        // addToCart(product)
    }

    return (
        <>
            {/*<h1>I am librarry filler component</h1>*/}
            {/*<pre>*/}
            {/*    {JSON.stringify(gpsTagList, null,2)}*/}
            {/*</pre>*/}

            {/*classes={classes.table}*/}

            <Container maxWidth="md">
                <TableContainer component={Paper}>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell>Location name</TableCell>
                                <TableCell align="right">Latitude</TableCell>
                                <TableCell align="right">Longitude</TableCell>
                                <TableCell align="right">RealPlaceName</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Has Shed</TableCell>
                                <TableCell align="right">Has Fireplace</TableCell>
                                <TableCell align="right">Has Lake Nearby</TableCell>
                                <TableCell align="right">Has WC</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ?
                                <TableRow>
                                    <TableCell colSpan={12} align="center">
                                        <CircularProgress/>
                                    </TableCell>
                                </TableRow> :
                                gpsTagList.map(gpsTag => (
                                    <TableRow key={gpsTag.id}>
                                        <TableCell component="th" scope="row">
                                            {gpsTag.name}
                                        </TableCell>
                                        <TableCell align="right">{gpsTag.latitude}</TableCell>
                                        <TableCell align="right">{gpsTag.longitude}</TableCell>
                                        <TableCell align="right">{gpsTag.realPlaceName}</TableCell>
                                        <TableCell align="right">{gpsTag.description}</TableCell>
                                        <TableCell align="right">{(gpsTag.hasShed ? "True" : "False")}</TableCell>
                                        <TableCell align="right">{(gpsTag.hasFireplace ? "True" : "False")}</TableCell>
                                        <TableCell align="right">{(gpsTag.hasLakeNearby ? "True" : "False")}</TableCell>
                                        <TableCell align="right">{(gpsTag.hasWC ? "True" : "False")}</TableCell>
                                        <Button variant="outlined" color="primary"
                                            onClick={() => handleOnClick(gpsTag)}>Buy</Button>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Container>


        </>
    )

}

const mapDispatchToProps={
    // 1.4 taigi norime kažkokios pridėk produktą funkcijos. Tam reikia nurodyti action creatoriaus funkciją
    addToTagItemList
}

// 1.3 prikabinam konektoriu ir pasakom kokius propsus ir kokius actionus norime daryti.

// const TagItemsListConnected = connect(null, mapDispatchToProps)(tagItem)
//
// export default LibraryFiller

// 1.4 panormalizuotas exportas.
const storeBindingFn= connect(null, mapDispatchToProps)
const TagItemsListConnected = storeBindingFn(LibraryFiller)

export default TagItemsListConnected
// export default connect(null, mapDispatchToProps)(LibraryFiller)
