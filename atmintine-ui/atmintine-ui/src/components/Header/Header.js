import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbar: {
        flexWrap: 'wrap',
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                       Home
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Mem Library
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>

                        </Link>
                    </nav>
                    <Button href="#" color="primary" variant="outlined" className={classes.link}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}
