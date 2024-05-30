import { createSlice } from '@reduxjs/toolkit';
import { IReduxState } from 'store/types';

const initialState: IReduxState['App'] = {
    sideBarStatus: false,
    contentLoader: false,
    fullPageTitleMenu: false
};

export const App = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSideBarStatus: state => {
            state.sideBarStatus = !state.sideBarStatus;
        },
        toggleFullVersionTitleMenu: state => {
            state.fullPageTitleMenu = !state.fullPageTitleMenu;
        },
        changeContentLoaderStatus: (state, action) => {
            state.contentLoader = action.payload;
        }
    }
});

export const { toggleSideBarStatus, changeContentLoaderStatus, toggleFullVersionTitleMenu } = App.actions;
export default App.reducer;
