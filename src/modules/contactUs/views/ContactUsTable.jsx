import {useSelector} from "react-redux";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import CustomTable from "../../../components/table/CustomTable";
import getColumns from "./columns";

const ContactUsTable = ({data, paginationObject, handleDelete, handleSearch}) => {
    const tableLoading = useSelector(state => state.contactUsReducer.all.loading)
    const deleteLoading = useSelector(state => state.contactUsReducer.deleteLoading);

    toastLoader(tableLoading || deleteLoading)

    return <CustomTable
        handleSearch={handleSearch}
        columns={getColumns({handleDelete})}
        data={data.all}
        pagination={true}
        paginationObject={paginationObject}
        handlePageChange
        title='Contact Us'
    />
}

export default ContactUsTable;