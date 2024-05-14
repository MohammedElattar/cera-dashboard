import {useSelector} from "react-redux";
import AddButton from "../../../components/table/AddButton";
import productRoutes from "../constants/routes";
import {parseRoute} from "../../../utility/helpers/routeHelper";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import CustomTable from "../../../components/table/CustomTable";
import getColumns from "../views/columns";

const ProductTable = ({data, paginationObject, handleDelete, handleSearch}) => {
    const tableLoading = useSelector(state => state.productReducer.all.loading)
    const deleteLoading = useSelector(state => state.productReducer.deleteLoading);
    const buttons = [<AddButton to={productRoutes.ADD} key={0}/>]
    const routeParser = (row) => {
        const {id} = row;
        return parseRoute(productRoutes.EDIT, {id})
    };

    toastLoader(tableLoading || deleteLoading)

    return <CustomTable
        buttons={buttons}
        handleSearch={handleSearch}
        columns={getColumns({handleDelete, routeParser})}
        data={data.all}
        pagination={true}
        paginationObject={paginationObject}
        handlePageChange
        title='Products'
    />
}

export default ProductTable;