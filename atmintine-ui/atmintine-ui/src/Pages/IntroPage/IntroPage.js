import {Box} from "@material-ui/core";
import {useTranslation} from "react-i18next";




const IntroPage = () => {

    const {t} = useTranslation('globalsPage');

    return (<>

            <Box m={2} pt={3}>
                <h1>{t('gWelcome')}</h1>
            </Box>



        </>
    )
}

export default IntroPage