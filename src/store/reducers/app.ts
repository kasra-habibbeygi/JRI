import { createSlice } from '@reduxjs/toolkit';
import { IReduxState } from 'store/types';

const initialState: IReduxState['App'] = {
    sideBarStatus: false,
    contentLoader: false
};

export const App = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSideBarStatus: state => {
            state.sideBarStatus = !state.sideBarStatus;
        },
        changeContentLoaderStatus: (state, action) => {
            state.contentLoader = action.payload;
        }
    }
});

export const { toggleSideBarStatus, changeContentLoaderStatus } = App.actions;
export default App.reducer;
