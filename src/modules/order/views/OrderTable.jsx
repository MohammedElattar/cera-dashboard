import {useSelector} from "react-redux";
import orderRoutes from "../constants/routes";
import {parseRoute} from "../../../utility/helpers/routeHelper";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import CustomTable from "../../../components/table/CustomTable";
import getColumns from "./columns";

const OrderTable = ({data, paginationObject, handleDelete, handleSearch}) => {
    const tableLoading = useSelector(state => state.ordersReducer.all.loading)
    const deleteLoading = useSelector(state => state.ordersReducer.deleteLoading);
    const routeParser = (row) => {
        const {id} = row;
        return parseRoute(orderRoutes.SHOW, {id})
    };

    toastLoader(tableLoading || deleteLoading)

    return <CustomTable
        handleSearch={handleSearch}
        columns={getColumns({handleDelete, routeParser})}
        data={data.all}
        pagination={true}
        paginationObject={paginationObject}
        handlePageChange
        title='Orders'
    />
}

export default OrderTable;