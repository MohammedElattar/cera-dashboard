import DeleteDropDownItem from "../../../components/table/dropDownItems/DeleteDropDownItem";
import TableActions from "../../../components/table/dropDownItems/TableActions";

const generateActions = (row, props) => {
    const {handleDelete} = props;
    const actions = [<DeleteDropDownItem key={1} handleDelete={() => handleDelete(row.id)}/>]

    return <TableActions row={row} actions={actions}/>
}

const getColumns = (props) => {
    return [
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
            name: 'Message',
            minwidth: '250px',
            selector: row => row.message
        },
        {
            name: 'Actions',
            minwidth: '100px',
            cell: row => generateActions(row, props)
        }
    ];
}

export default getColumns;