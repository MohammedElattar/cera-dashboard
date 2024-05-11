// ** Reactstrap Imports
import {Row, Col, Form, Card, Label, Button, CardBody, CardTitle, CardHeader, Spinner} from 'reactstrap'
import CustomTextInput from "../../../components/form/CustomInput";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import {useSelector} from "react-redux";
import {goBack} from "../../../utility/helpers/routeHelper";
import useFormikLogic from "../../../utility/hooks/useFormikLogic";
import InputColor from "react-input-color";

const ColorForm = ({inUpdate, formikObject}) => {
    const {handleSubmit, values, errors, handleBlur, handleChange, isSubmitting, setFieldValue} = formikObject;
    const isFetching = useSelector(state => state.colorsReducer.show.loading);
    const {shouldSubmit} = useFormikLogic(isSubmitting, errors)

    toastLoader(isFetching)
console.log(values)
    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>{inUpdate ? 'Update' : 'Add'} Color</CardTitle>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm='12' className='mb-1'>
                            <Label className='form-label' for='name'>
                                Color Name
                            </Label>
                            <CustomTextInput
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Red'
                                value={values.name}
                                invalid={errors.name && true}
                                error={errors.name}
                            />
                        </Col>
                        <Col sm='12'>
                            <Label className='form-label' for='name'>
                                Color Name
                            </Label>
                                <InputColor
                                    className={'w-100'}
                                    initialValue={values.code || '#eeeeee'}
                                    onChange={(color) => setFieldValue('code', color.hex)}
                                />
                                {errors.code && <span>{errors.code}</span>}
                        </Col>
                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <div className='d-flex'>
                                <Button type='submit' className='me-1' color='primary' disabled={!shouldSubmit()}>
                                    {isSubmitting && (<><Spinner size='sm' type='grow' /><span className='ms-50'>Loading...</span></>)}
                                    {!isSubmitting && 'Submit'}
                                </Button>
                                <Button outline color='secondary' type='button' onClick={goBack}>
                                    Go back
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}
export default ColorForm
