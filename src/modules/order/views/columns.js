import DeleteDropDownItem from "../../../components/table/dropDownItems/DeleteDropDownItem";
import TableActions from "../../../components/table/dropDownItems/TableActions";
import EditDropDownItem from "../../../components/table/dropDownItems/EditDropDownItem";
import Avatar from "../../../@core/components/avatar";
import ShowDropDownItem from "../../../components/table/dropDownItems/ShowDropDownItem";

const generateActions = (row, props) => {
    const {routeParser} = props;
    const actions = [<ShowDropDownItem tag='a' href={routeParser(row)} />]

    return <TableActions row={row} actions={actions}/>
}

const getColumns = (props) => {
    return [
        {
            sortable: true,
            name: 'ID',
            minwidth: '250px',
            selector: row => row.id
        },
        {
            sortable: true,
            name: 'Name',
            minwidth: '250px',
            selector: row => row.name
        },
        {
            sortable: true,
            name: 'Email',
            minwidth: '250px',
            selector: row => row.email
        },
        {
            sortable: true,
            name: 'Phone',
            minwidth: '250px',
            selector: row => row.phone
        },
        {
            sortable: true,
            name: 'Address',
            minwidth: '250px',
            selector: row => row.address
        },
        {
            name: 'Actions',
            minwidth: '100px',
            cell: row => generateActions(row, props)
        }
    ];
}

export default getColumns;