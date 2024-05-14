import Avatar from "../../../@core/components/avatar";

const getColumns = () => {
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
            selector: row => row.product.name
        },
        {
            sortable: true,
            name: 'Image',
            minwidth: '250px',
            cell: row => {
                return <Avatar className='me-1'  img={row.product.image} imgHeight="40" imgWidth="40"/>
            }
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
            selector: row => row.product.price
        },
        {
            sortable: true,
            name: 'Sub Total',
            minwidth: '250px',
            selector: row => row.product.price * row.quantity
        }
    ];
}

export default getColumns;