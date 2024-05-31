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
import NotFound from 'pages/not-found';

const App = () => {
    const theme = useAppSelector(state => state.ThemeProvider.theme);
    const themeObject = designToken(theme, 'ltr');
    const RoutesJSON = routesConfig();

    // if (window.location.protocol !== 'https:') {
    //     window.location.href = `https:${window.location.href.substring(window.location.protocol.length)}`;
    // }

    return (
        <>
            <Toaster
                position='bottom-right'
                containerStyle={{
                    zIndex: 9999999999
                }}
            />
            <ThemeProvider theme={createTheme(themeObject)}>
                <BrowserRouter>
                    <Routes>
                        <Route>
                            {RoutesJSON.map((item, index) => (
                                <Route
                                    path={item.route}
                                    element={
                                        <LayoutManipulation>
                                            <item.component />
                                        </LayoutManipulation>
                                    }
                                    key={'route' + index}
                                />
                            ))}
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
