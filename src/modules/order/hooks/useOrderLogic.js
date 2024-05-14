import {useDispatch, useSelector} from "react-redux";
import {getUniqueParams} from "../../../utility/helpers/routeHelper";
import {

} from "../../product/redux";
import axiosInstance from "../../../api/axiosInstance";
import {setAllOrdersLoading, setAllOrdersLogic, setAllOrdersMetaLogic, setOneOrderLogic} from "../redux";

const useOrderLogic = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.ordersReducer),
        all = selector.all.data,
        meta = selector.all.meta,
        oneOrder = selector.show;

    const getAllOrdersLogic = (params = undefined) => {
        params = params === undefined ? getUniqueParams() : params;
        dispatch(setAllOrdersLoading(true))

        axiosInstance.get('/api/admin/orders', {params}).then((response) => {
            dispatch(setAllOrdersLogic(response.data.data))
            dispatch(setAllOrdersMetaLogic(response.data.meta));
        })
            .finally(() => dispatch(setAllOrdersLoading(false)))
    }

    const getOneOrderLogic = (id) => {
        axiosInstance.get(`/api/admin/orders/${id}`).then((response) => {
            dispatch(setOneOrderLogic(response.data.data))
        })
    }

    return {
        all,
        meta,
        oneOrder,
        getAllOrdersLogic,
        getOneOrderLogic
    }
}

export default useOrderLogic