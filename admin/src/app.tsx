import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Configs
import { designToken, routesConfig } from 'commons/configs';

// Hooks
import { useAppSelector } from 'commons/hooks';

// Components
import { LayoutManipulation } from 'commons/components';

// Assets
import GlobalStyles from 'assets/css/global.styled';

const App = () => {
    const theme = useAppSelector(state => state.ThemeProvider.theme);
    const themeObject = designToken(theme, 'ltr');
    const RoutesJSON = routesConfig();

    return (
        <>
            <Toaster
                position='bottom-right'
                containerStyle={{
                    zIndex: 9999999999
                }}
            />
            <ThemeProvider theme={createTheme(themeObject)}>
                <GlobalStyles theme={createTheme(themeObject)} />
                <BrowserRouter>
                    <Routes>
                        <Route path='/'>
                            {RoutesJSON.map((item, index) => {
                                let finalComponent = <item.component />;

                                if (item.route !== 'login') {
                                    finalComponent = (
                                        <LayoutManipulation>
                                            <item.component />
                                        </LayoutManipulation>
                                    );
                                }

                                return <Route path={item.route} element={finalComponent} key={'route' + index} />;
                            })}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
