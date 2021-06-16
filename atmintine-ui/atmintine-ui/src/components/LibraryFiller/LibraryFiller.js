import {fetchGpsTags} from '../../api/GpsTagAPI'
import React, {useEffect, useState} from "react";
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
import {useTranslation} from "react-i18next";

import {deleteGpsTag} from '../../api/GpsTagAPI'
import {Link as RouterLink} from "react-router-dom";



// 1.1 susikuriam stiliuko f-ja
// TODO nežinau ar čia reikia šito
const useStyle = makeStyles({
    table: {
        maxWidth: 900
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

    //Tranlatorius
    const { t } = useTranslation('tagItems');


    return (
        <>
            <Container>
                <TableContainer component={Paper}>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                {/*<TableCell>Location name</TableCell>*/}
                                <TableCell align="right">{t('PersonalName')}</TableCell>
                                <TableCell align="right">{t('Latitude')}</TableCell>
                                <TableCell align="right">{t('Longitude')}</TableCell>
                                <TableCell align="right">{t('RealPlaceName')}</TableCell>
                                <TableCell align="right">{t('Description')}</TableCell>
                                <TableCell align="right">{t('HasShed')}</TableCell>
                                <TableCell align="right">{t('HasFireplace')}</TableCell>
                                <TableCell align="right">{t('HasLakeNearby')}</TableCell>
                                <TableCell align="right">{t('HasWC')}</TableCell>

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
                                        {/*<Button variant="outlined" color="primary"*/}
                                        {/*    onClick={() => handleOnClick(gpsTag)}>Add to Redux</Button>*/}

                                        {/*<Button variant="outlined" color="primary"*/}
                                        {/*        onClick={() => deleteGPSTAG(gpsTag)}>Delete</Button>*/}

                                        <Button color="primary" to={"/tagItemService/" + gpsTag.id}
                                                variant="contained"
                                                component={RouterLink}
                                                onClick={() => (gpsTag)}>Details</Button>

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
