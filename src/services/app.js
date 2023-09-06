import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    token: null,
};

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction) => {
            state.token = action.payload;
        },
    }
});

export const {
    setToken
} = appSlice.actions;
export default appSlice.reducer;
