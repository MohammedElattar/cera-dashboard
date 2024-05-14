import CustomTable from "../../../components/table/CustomTable";
import getColumns from "./oneOrderColumns";

const ShowOrderTable = ({data}) => {
    return <CustomTable
        pagination={false}
        columns={getColumns()}
        data={data}
        title='Products'
        searchable={false}
    />
}

export default ShowOrderTable