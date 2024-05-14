import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    colors: {data: [], loading: false}
}

export const selectMenuSlice = createSlice({
    name: 'selectMenu',
    initialState,
    reducers: {
        setColorsMenuAction: (state, action) => {
            state.colors.data = action.payload;
        },
        setColorsMenuLoading: (state, action) => {
            state.colors.loading = action.payload;
        }
    }
})

export default selectMenuSlice.reducer;
export const {
    setColorsMenuAction,
    setColorsMenuLoading
} = selectMenuSlice.actions;