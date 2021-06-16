import {Box, Container} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import GpsTagForm from "../../components/GpsTagForm/GpsTagForm";
import GpsTagCreate from "../../components/GpsTag/GpsTagCreate";
import {useSelector} from "react-redux";


const IntroPage = () => {

    const {t} = useTranslation('globalsPage');
    const loggedInUser = useSelector(state => state.user.loggedInUser)





    return (

        <>
            <Container maxWidth={"sm"}>

                <h1>{t('gWelcome')}</h1>

                {(loggedInUser &&
                    <h2>{t('gEnetCoordinates')}</h2> )
                }

                {(loggedInUser &&
                    <GpsTagCreate/> )
                }

            </Container>
        </>
    )
}

export default IntroPage