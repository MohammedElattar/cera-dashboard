import {Button, Col, Spinner} from "reactstrap";
import {goBack} from "../../utility/helpers/routeHelper";

const SubmitForm = ({isSubmitting}) => {
    // const {shouldSubmit} = useFormikLogic(isSubmitting, errors)

    return <Col xs={12} className='text-center mt-2 pt-50'>
        <div className='d-flex'>
            <Button type='submit' className='me-1' color='primary' disabled={isSubmitting}>
                {isSubmitting && (<><Spinner size='sm' type='grow' /><span className='ms-50'>Loading...</span></>)}
                {!isSubmitting && 'Submit'}
            </Button>
            <Button outline color='secondary' type='button' onClick={goBack}>
                Go back
            </Button>
        </div>
    </Col>
}

export default SubmitForm;