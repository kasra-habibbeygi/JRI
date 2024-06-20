import { createSlice } from '@reduxjs/toolkit';
import { IReduxState } from 'store';

const InitialState: IReduxState['ThemeProvider'] = {
    theme: localStorage.getItem('theme') ? (localStorage.getItem('theme') as 'dark' | 'light') : 'light',
    direction: localStorage.getItem('language')
        ? localStorage.getItem('language') === 'fa' || localStorage.getItem('theme') === 'ar'
            ? 'rtl'
            : 'ltr'
        : 'ltr'
};

export const theme = createSlice({
    name: 'theme',
    initialState: InitialState,
    reducers: {
        themeProvider: state => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', state.theme);
        },
        directionProvider: state => {
            state.direction = state.direction === 'ltr' ? 'rtl' : 'ltr';
            localStorage.setItem('language', state.direction);
        }
    }
});

export const { themeProvider, directionProvider } = theme.actions;

export default theme.reducer;
