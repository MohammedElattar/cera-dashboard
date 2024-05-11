import {createSlice} from "@reduxjs/toolkit";
import {paginationInitialValues, resetStoreMethod, setPaginationAction} from "../../../utility/helpers/reduxHelper";

const initialState = {
    all: {
        data: [],
        loading: false,
        ...paginationInitialValues()
    },
    deleteLoading: false
}

export const contactUsSlice = createSlice({
    name: 'contactUs',
    initialState,
    reducers: {
        setAllContactUsAction: (state, action) => {
            state.all.data = action.payload;
        },
        setAllContactUsMetaAction: (state, action) => {
            state.all.meta = setPaginationAction(action)
        },
        setAllContactUsLoadingAction: (state, action) => {
           state.all.loading = action.payload;
        },
        deleteContactUsLoadingAction: (state, action) => {
            state.deleteLoading = action.payload;
        },
        ...resetStoreMethod(initialState)
    }
})

export default contactUsSlice.reducer;
export const {
    setAllContactUsAction,
    setAllContactUsMetaAction,
    setAllContactUsLoadingAction,
    deleteContactUsLoadingAction
} = contactUsSlice.actions