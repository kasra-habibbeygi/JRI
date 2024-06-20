import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Configs
import { designToken, routesConfig } from 'commons/configs';

// Hooks
import { useAppSelector } from 'commons/hooks';

// Components
import { LayoutManipulation } from 'commons/components';
import NotFound from 'pages/not-found';

// Assets
import GlobalStyles from 'assets/css/global.styled';

const LanguageHandler = () => {
    location.href = 'en/home';
    return false;
};

const App = () => {
    const { language, changeLanguage, options } = useTranslation().i18n;
    const direction = language === 'fa' || language === 'ar' ? 'rtl' : 'ltr';
    const theme = useAppSelector(state => state.ThemeProvider.theme);
    const themeObject = designToken(theme, direction);
    const RoutesJSON = routesConfig();
    const lng = location.pathname.split('/')[1];

    useEffect(() => {
        localStorage.setItem('language', language);
        document.dir = direction;
    }, [language]);

    useEffect(() => {
        const detectedLng = Object.keys(options.resources ?? {}).includes(lng!) ? lng : 'en';
        if (language !== detectedLng) {
            changeLanguage(detectedLng);
        }
    }, [lng]);

    return (
        <>
            <Toaster
                position='bottom-right'
                containerStyle={{
                    zIndex: 9999999999
                }}
            />
            <ThemeProvider theme={createTheme(themeObject)}>
                <GlobalStyles theme={createTheme(themeObject)} direction={direction} />
                <BrowserRouter>
                    <Routes>
                        <Route path='' element={<LanguageHandler />} />
                        <Route path=':lng'>
                            {RoutesJSON.map((item, index) => {
                                let finalComponent = <item.component />;

                                if (
                                    item.route !== 'login' &&
                                    item.route !== 'register' &&
                                    item.route !== 'forgot-password' &&
                                    item.route !== 'change-password'
                                ) {
                                    finalComponent = (
                                        <LayoutManipulation>
                                            <item.component />
                                        </LayoutManipulation>
                                    );
                                }

                                return <Route path={item.route} element={finalComponent} key={'route' + index} />;
                            })}
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
