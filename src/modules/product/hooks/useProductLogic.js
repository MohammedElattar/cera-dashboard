import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getUniqueParams} from "../../../utility/helpers/routeHelper";
import {
    setAllProductsLogic,
    setAllProductsLoading,
    setAllProductsMetaLogic, setOneProductLogic
} from "../redux";
import axiosInstance from "../../../api/axiosInstance";
import productRoutes from "../../product/constants/routes";
import {formikErrorHandler} from "../../../utility/formik/formikHelper";

const useProductLogic = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selector = useSelector(state => state.productReducer),
        all = selector.all.data,
        meta = selector.all.meta,
        oneProduct = selector.show;

    const getAllProductsLogic = (params = undefined) => {
        params = params === undefined ? getUniqueParams() : params;
        dispatch(setAllProductsLoading(true))

        axiosInstance.get('/api/admin/products', {params}).then((response) => {
            dispatch(setAllProductsLogic(response.data.data))
            dispatch(setAllProductsMetaLogic(response.data.meta));
        }).finally(() => dispatch(setAllProductsLoading(false)))
    }

    const getOneProductLogic = (id) => {
        dispatch(setAllProductsLoading(true))

        axiosInstance.get(`/api/admin/products/${id}`).then((response) => {
            dispatch(setOneProductLogic(response.data.data));
        }).finally(() => dispatch(setAllProductsLoading(false)))
    }

    const storeProductLogic = (values, formikObject) => {
        const {setSubmitting} = formikObject;

        setSubmitting(true)

        axiosInstance.postForm('/api/admin/products', values)
            .then(() => navigate(productRoutes.TABLE))
            .catch((error) => formikErrorHandler(error.response.data, formikObject))
            .finally(() => setSubmitting(false))
    }

    const updateProductLogic = (values, id, formikObject) => {
        const {setSubmitting} = formikObject;

        setSubmitting(true)

        axiosInstance.postForm(`/api/admin/products/${id}`, values)
            .then(() => navigate(productRoutes.TABLE))
            .catch((error) => formikErrorHandler(error.response.data, formikObject))
            .finally(() => setSubmitting(false))
    }

    const deleteProductLogic = (id) => {
        axiosInstance.delete(`/api/admin/products/${id}`).then(() => getAllProductsLogic())
    }

    return {
        all,
        meta,
        oneProduct,
        getAllProductsLogic,
        storeProductLogic,
        updateProductLogic,
        deleteProductLogic,
        getOneProductLogic
    }
}

export default useProductLogic