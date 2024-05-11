import { Button} from "reactstrap";
import PropTypes from 'prop-types'
import { Edit } from "react-feather";
import {Link} from "react-router-dom";

const EditDropDownItem = ({ onClick, href}) => {
    return <Link size='sm' to={href} color='transparent' className='btn btn-icon' onClick={onClick}>
        <Edit className='font-medium-2' />
    </Link>
}

EditDropDownItem.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default EditDropDownItem;