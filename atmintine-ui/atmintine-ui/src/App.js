
import TestComponent from "./components/TestComponent";
import BasicTable from "./components/InfoTable/InfoTable";
import ActionButtonClicked from "./components/TestingComponents/Button/Button_t_1";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LoginForm from "./components/UserLogin/LoginForm";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }
}));


function App() {
    const classes = useStyles()

  return (
    <div className={classes.root}>
        {/*<h1>Holla amygos</h1>*/}
        {/*<TestComponent user={{*/}
        {/*    name: "Kitoks",*/}
        {/*    surame: "Pvadinimas"*/}

        {/*}} />*/}

        {/*<BasicTable/>*/}
        {/*<ActionButtonClicked/>*/}
        <CssBaseline />
        <Header/>
        <Content/>
        <LoginForm/>
        <Footer/>
    </div>
  );
}

export default App;
