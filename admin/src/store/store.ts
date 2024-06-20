import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from './reducers';
import { App } from './reducers';

export const store = () => {
    return configureStore({
        reducer: {
            ThemeProvider,
            App
        }
    });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
