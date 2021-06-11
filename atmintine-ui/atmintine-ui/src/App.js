import TestComponent from "./components/TestComponent";
import BasicTable from "./components/InfoTable/InfoTable";
import ActionButtonClicked from "./components/TestingComponents/Button/Button_t_1";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import LoginForm from "./components/UserLogin/LoginForm";
import {BrowserRouter as Router} from "react-router-dom";
import {useState} from "react";

import React, {createContext} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }
}));

const AppDataContext = React.createContext(null)


function App() {
    const classes = useStyles()

    //1.1 susikuriam stetio hooksą pasigeneruoti duomenims viso apso
    const [appDataSet, setAppDataItem] = useState([])

    //1.2 susikuriam steitą visam appsui. Šitas svarbiausias.
    const appContextState = {
        appDataSet,
        addAppDataItem: (appDataItem) => setAppDataItem([...appDataSet, appDataItem]),
        removeAppDataItem: (id) => setAppDataItem(appDataSet.filter((setAppDataItem) => setAppDataItem.id !== id))
    }

    return (
        <AppDataContext.Provider value={appContextState}>
            <Router>
                <div className={classes.root}>
                    {/*<h1>Holla amygos</h1>*/}
                    {/*<TestComponent user={{*/}
                    {/*    name: "Kitoks",*/}
                    {/*    surame: "Pvadinimas"*/}

                    {/*}} />*/}

                    {/*<BasicTable/>*/}
                    {/*<ActionButtonClicked/>*/}
                    <CssBaseline/>
                    <Header/>
                    <Content/>
                    {/*<LoginForm/>*/}
                    <Footer/>
                </div>
            </Router>
        </AppDataContext.Provider>
    );
}

export default App
export {AppDataContext}
