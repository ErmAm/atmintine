import AppBar from "@material-ui/core/AppBar";
import {Box, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux";

import {Link as RouterLink} from "react-router-dom";

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
    },
    active:{
        fontWeight: "bolder",
        color: "blue"
    }
}))

export default () => {
    const classes = useStyles()


    const userFullName = useSelector(state => state.user.loggedInUser?.fullName)

    return (
        <>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                       GPS Atmintinė
                    </Typography>
                    <nav>
                        <Link to="/"
                              component={NavLink}
                              variant="button"
                              color="textPrimary"
                              className={classes.link}>
                            Home
                        </Link>


                        <Link to="/library"
                              component={NavLink}
                              activeClassName={classes.active}
                              variant="button"
                              color="textPrimary"
                              className={classes.link}>
                            Library
                        </Link>

                        <Link to="/profile"
                              component={NavLink}
                              activeClassName={classes.active}
                              variant="button"
                              color="textPrimary"
                              className={classes.link}>
                            Account
                        </Link>


                        {/*Čia truputi magija su parametrais nutinka*/}
                        <Link to="/registration"
                                    component={NavLink}
                                    activeClassName={classes.active}
                                    variant="button"
                                    color="textPrimary"
                                    className={classes.link}>
                            Registration
                        </Link>



                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>

                        </Link>
                    </nav>
                    {/*<Button href="/login" color="primary" variant="outlined" className={classes.link}>*/}
                    {/*    Login*/}
                    {/*</Button>*/}

                    <Box mx={4}>
                        {
                            userFullName ?
                            <>
                                <Typography variant="h6" component="span">
                                    Hello, {userFullName}
                                </Typography>

                                <Button color="secondary" variant="contained" className={classes.link}>
                                    Logout
                                </Button>
                            </>
                            :
                            <>
                                <Button color="primary" to="/login" variant="contained" component={RouterLink}>
                                    Login
                                </Button>

                                {/* TODO Šitą  reikia sutvarkyti kad selektorius veiktų.*/}

                                <Button href="#" color="secondary" variant="contained" className={classes.link}>
                                    {/*{t('signIn')}*/}
                                </Button>
                            </>
                        }
                    </Box>



                </Toolbar>
            </AppBar>
        </>
    )
}

