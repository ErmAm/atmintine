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
import LanguageSwitcher from "../translation/LanguageSwitcher";

import {logout as userLogaut} from "../../store/slices/userSlice"
import {useTranslation} from "react-i18next";

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



    // const userFullName = useSelector(state => state.user.loggedInUser?.fullName)
    const loggedInUser  = useSelector(state => state.user.loggedInUser)
    const {t} = useTranslation('header');

    return (
        <>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                      {t('hMainName')}
                    </Typography>
                    <nav>
                        <Link to="/"
                              component={NavLink}
                              variant="button"
                              color="textPrimary"
                              className={classes.link}>
                            {t('hHome')}
                        </Link>


                        <Link to="/library"
                              component={NavLink}
                              activeClassName={classes.active}
                              variant="button"
                              color="textPrimary"
                              className={classes.link}>
                            {t('hLibrary')}
                        </Link>

                        {
                            loggedInUser?.roles.includes("ADMIN","USER") ?
                            <Link to="/profile"
                                  component={NavLink}
                                  activeClassName={classes.active}
                                  variant="button"
                                  color="textPrimary"
                                  className={classes.link}>
                                {t('hAccount')}
                            </Link>: ""
                        }

                        {
                            loggedInUser?.roles.includes("ADMIN") ?
                                <Link variant="button"
                                      color="textPrimary"
                                      to="/users"
                                      className={classes.link}
                                      activeClassName={classes.active}
                                      component={NavLink}>
                                    {t('hUsers')}
                                </Link> : ""
                        }

                        <Link to="/registration"
                                    component={NavLink}
                                    activeClassName={classes.active}
                                    variant="button"
                                    color="textPrimary"
                                    className={classes.link}>
                            {t('hRegistration')}
                        </Link>

                    </nav>

                    <Box mx={4}>
                        {loggedInUser?.fullName ?
                            <>
                                <Typography variant="h6" component="span">
                                    {t('hWelcome')}, {loggedInUser.fullName}
                                </Typography>

                                <Button color="secondary" onClick={() => {
                                    window.location.href = "/"
                                }} variant="contained" className={classes.link}>
                                    {t('hLogout')}
                                </Button>
                            </>
                            :
                            <>
                                <Button color="primary" to="/login" variant="contained" component={RouterLink}>
                                    {t('hLogin')}
                                </Button>
                            </>
                        }
                    </Box>

                    <LanguageSwitcher/>

                </Toolbar>
            </AppBar>
        </>
    )
}

