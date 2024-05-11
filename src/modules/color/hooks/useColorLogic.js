import {useDispatch, useSelector} from "react-redux";
import {getUniqueParams} from "../../../utility/helpers/routeHelper";
import axiosInstance from "../../../api/axiosInstance";
import {
    setAllColorsAction,
    setAllColorsLoadingAction,
    setAllColorsMetaAction, setOneColorAction,
    setOneColorLoadingAction
} from "../redux";
import {formikErrorHandler} from "../../../utility/formik/formikHelper";
import {useNavigate} from "react-router-dom";
import colorRoutes from "../constants/routes";

const useColorLogic = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selector = useSelector(state => state.colorsReducer),
        all = selector.all.data,
        meta = selector.all.meta,
        oneColor = selector.show.data;

    const getAllColorsLogic = (params = undefined) => {
        params = params === undefined ? getUniqueParams() : params;
        dispatch(setAllColorsLoadingAction(true))

        axiosInstance.get('/admin/colors', {params}).then((response) => {
            dispatch(setAllColorsAction(response.data.data))
            dispatch(setAllColorsMetaAction(response.data.meta));
        }).finally(() => dispatch(setAllColorsLoadingAction(false)))
    }

    const getOneColorLogic = (id) => {
        dispatch(setOneColorLoadingAction(true))

        axiosInstance.get(`/admin/colors/${id}`).then((response) => {
            dispatch(setOneColorAction(response.data.data));
        }).finally(() => dispatch(setOneColorLoadingAction(false)))
    }

    const storeColorLogic = (values, formikObject) => {
        const {setSubmitting} = formikObject;

        setSubmitting(true)

        axiosInstance.post('/admin/colors', values)
            .then(() => navigate(colorRoutes.TABLE))
            .catch((error) => formikErrorHandler(error.response.data, formikObject))
            .finally(() => setSubmitting(false))
    }

    const updateColorLogic = (values, id, formikObject) => {
        const {setSubmitting} = formikObject;

        setSubmitting(true)

        axiosInstance.put(`/admin/colors/${id}`, values)
            .then(() => navigate(colorRoutes.TABLE))
            .catch((error) => formikErrorHandler(error.response.data, formikObject))
            .finally(() => setSubmitting(false))
    }

    const deleteColorLogic = (id) => {
        axiosInstance.delete(`admin/colors/${id}`).then(() => getAllColorsLogic())
    }

    return {
        all,
        meta,
        oneColor,
        getAllColorsLogic,
        storeColorLogic,
        updateColorLogic,
        deleteColorLogic,
        getOneColorLogic
    }
}

export default useColorLogic;