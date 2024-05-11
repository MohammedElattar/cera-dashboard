import {useSelector} from "react-redux";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import CustomTable from "../../../components/table/CustomTable";
import getColumns from "./columns";
import {parseRoute} from "../../../utility/helpers/routeHelper";
import colorRoutes from "../constants/routes";
import AddButton from "../../../components/table/AddButton";

const ColorTable =  ({data, paginationObject, handleDelete, handleSearch}) => {
    const tableLoading = useSelector(state => state.colorsReducer.all.loading)
    const deleteLoading = useSelector(state => state.colorsReducer.deleteLoading);
    const buttons = [<AddButton to={colorRoutes.ADD} key={0}/>]
    const routeParser = (row) => {
        const {id} = row;
        return parseRoute(colorRoutes.EDIT, {id})
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
        title='Colors'
    />
}

export default ColorTable;