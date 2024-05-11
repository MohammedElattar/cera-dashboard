import {createSlice} from "@reduxjs/toolkit";
import {paginationInitialValues, setPaginationAction} from "../../../utility/helpers/reduxHelper";

const initialState = {
    all: {
        data: [],
        loading: false,
        ...paginationInitialValues()
    },
    show: {
        data: {},
        loading: false
    }
}

export const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        setAllColorsAction: (state, action) => {
            state.all.data = action.payload;
        },
        setAllColorsMetaAction: (state, action) => {
            state.all.meta = setPaginationAction(action)
        },
        setAllColorsLoadingAction: (state, action) => {
            state.all.loading = action.payload;
        },
        setOneColorAction: (state, action) => {
            state.show.data = action.payload;
        },
        setOneColorLoadingAction: (state, action) => {
            state.show.loading = action.payload;
        }
    }
})

export default colorsSlice.reducer;
export const {
    setAllColorsAction,
    setAllColorsMetaAction,
    setAllColorsLoadingAction,
    setOneColorAction,
    setOneColorLoadingAction
} = colorsSlice.actions;