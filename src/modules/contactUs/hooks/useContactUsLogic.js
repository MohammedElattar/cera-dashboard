import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../../api/axiosInstance";
import {
    deleteContactUsLoadingAction,
    setAllContactUsAction,
    setAllContactUsLoadingAction,
    setAllContactUsMetaAction
} from "../redux";
import {getUniqueParams} from "../../../utility/helpers/routeHelper";

const useContactUsLogic = () => {
    const dispatch = useDispatch(),
        selector = useSelector((state) => state.contactUsReducer),
        all = selector.all.data,
        allLoading = selector.all.loading,
        meta = selector.all.meta;

    const getContactUsTableLogic = (params = undefined) => {
        params = params === undefined ? getUniqueParams() : params;
        dispatch(setAllContactUsLoadingAction(true))

        axiosInstance.get('/admin/contact_us', {params}).then((response) => {

            dispatch(setAllContactUsAction(response.data.data));
            dispatch(setAllContactUsMetaAction(response.data.meta))
       }).finally(() => dispatch(setAllContactUsLoadingAction(false)))
    }

    const deleteContactUsLogic = (id) => {
        dispatch(deleteContactUsLoadingAction(true))
        axiosInstance.delete(`/admin/contact_us/${id}`).then(() => {
            getContactUsTableLogic()
        }).finally(() => dispatch(deleteContactUsLoadingAction(false)))
    }

    return {
        getContactUsTableLogic,
        deleteContactUsLogic,
        all,
        allLoading,
        meta
    }
}

export default useContactUsLogic;