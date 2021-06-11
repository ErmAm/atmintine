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


// 1.1 susikuriam stiliuko f-ja
// TODO nežinau ar čia reikia šito
const useStyle = makeStyles({
    table: {
        maxWidth: 650
    }
})


const LibraryFiller = () => {

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
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Container>


        </>
    )

}

export default LibraryFiller