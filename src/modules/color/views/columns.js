import DeleteDropDownItem from "../../../components/table/dropDownItems/DeleteDropDownItem";
import TableActions from "../../../components/table/dropDownItems/TableActions";
import EditDropDownItem from "../../../components/table/dropDownItems/EditDropDownItem";
import ColorColumn from "../../../components/form/ColorColumn";

const generateActions = (row, props) => {
    const {handleDelete, routeParser} = props;
    const actions = [
        <EditDropDownItem tag='a' href={routeParser(row)} />,
        <DeleteDropDownItem key={1} handleDelete={() => handleDelete(row.id)}/>
    ]

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
            name: 'Hex Code',
            minwidth: '250px',
            cell: row => <ColorColumn hexCode={row.code} title={row.code}/>
        },
        {
            name: 'Actions',
            minwidth: '100px',
            cell: row => generateActions(row, props)
        }
    ];
}

export default getColumns;