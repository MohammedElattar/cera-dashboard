import PropTypes from "prop-types";
import {FormFeedback} from "reactstrap";

const ErrorBox = ({message}) => {
    return message && <span className={'alert alert-danger'}>{message}</span>
}

ErrorBox.propTypes = {
    message: PropTypes.string
}

export default ErrorBox