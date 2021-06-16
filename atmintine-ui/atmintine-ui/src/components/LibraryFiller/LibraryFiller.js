import {fetchGpsTags} from '../../api/GpsTagAPI'
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
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
import {Link as RouterLink} from "react-router-dom";

const useStyle = makeStyles({
    table: {
        maxWidth: 900
    }
})

const LibraryFiller = () => {

    const {t} = useTranslation('content');

    const [gpsTagList, setGpsTagList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchGpsTags()
            .then(({data}) =>
                setGpsTagList(data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <Container>
                <TableContainer component={Paper}>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
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
                                        <Button color="primary" to={"/tagItemService/" + gpsTag.id}
                                                variant="contained"
                                                component={RouterLink}
                                                onClick={() => (gpsTag)}>{t('coDetails')}</Button>
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
    addToTagItemList
}

const storeBindingFn= connect(null, mapDispatchToProps)
const TagItemsListConnected = storeBindingFn(LibraryFiller)

export default TagItemsListConnected

