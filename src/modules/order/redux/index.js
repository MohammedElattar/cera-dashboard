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

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setAllOrdersLogic: (state, action) => {
            state.all.data = action.payload;
        },
        setAllOrdersMetaLogic: (state, action) => {
            state.all.meta = setPaginationAction(action)
        },
        setAllOrdersLoading: (state, action) => {
            state.all.loading = action.payload;
        },
        setOneOrderLogic: (state, action) => {
            state.show = action.payload;
        }
    }
})

export default ordersSlice.reducer;
export const {
    setAllOrdersLogic,
    setAllOrdersMetaLogic,
    setAllOrdersLoading,
    setOneOrderLogic
} = ordersSlice.actions;