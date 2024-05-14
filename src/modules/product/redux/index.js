import {paginationInitialValues, setPaginationAction} from "../../../utility/helpers/reduxHelper";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    all: {
        data: [],
        loading: false,
        ...paginationInitialValues()
    },
    show: {}
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProductsLogic: (state, action) => {
            state.all.data = action.payload;
        },
        setAllProductsMetaLogic: (state, action) => {
            state.all.meta = setPaginationAction(action)
        },
        setAllProductsLoading: (state, action) => {
            state.all.loading = action.payload;
        },
        setOneProductLogic: (state, action) => {
            state.show = action.payload;
        }
    }
})

export default productSlice.reducer;
export const {
    setAllProductsLogic,
    setAllProductsMetaLogic,
    setAllProductsLoading,
    setOneProductLogic
} = productSlice.actions;