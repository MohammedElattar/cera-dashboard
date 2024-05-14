import DeleteDropDownItem from "../../../components/table/dropDownItems/DeleteDropDownItem";
import TableActions from "../../../components/table/dropDownItems/TableActions";
import EditDropDownItem from "../../../components/table/dropDownItems/EditDropDownItem";
import Avatar from "../../../@core/components/avatar";

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
            name: 'Quantity',
            minwidth: '250px',
            selector: row => row.quantity
        },
        {
            sortable: true,
            name: 'Price',
            minwidth: '250px',
            selector: row => row.price
        },
        {
            sortable: true,
            name: 'Image',
            minwidth: '250px',
            cell: row => {
                return <Avatar className='me-1'  img={row.image} imgHeight="40" imgWidth="40"/>
            }
        },
        {
            name: 'Actions',
            minwidth: '100px',
            cell: row => generateActions(row, props)
        }
    ];
}

export default getColumns;