import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {BrowserRouter as Router} from "react-router-dom";
import {useState} from "react";

import React, {createContext} from "react";
import store from "./store";
import {Provider} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }
}));



// //2.1 Redux susikuriu store
// const store = constructStore()


function App() {
    const classes = useStyles()

    return (
        //2.2 apsigaubiam apsą su reduxu.
        <Provider store={store}>
            <Router>
                <div className={classes.root}>

                    {/*<BasicTable/>*/}
                    {/*<ActionButtonClicked/>*/}
                    <CssBaseline/>
                    <Header/>
                    <Content/>
                    {/*<LoginForm/>*/}
                    <Footer/>
                </div>
            </Router>
        </Provider>
);
}

export default App

