// ** Reactstrap Imports
import {Row, Col, Form, Card, Label, CardBody, CardTitle, CardHeader} from 'reactstrap'
import CustomTextInput from "../../../components/form/CustomInput";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import {useSelector} from "react-redux";
import InputColor from "react-input-color";
import SubmitForm from "../../../components/form/SubmitForm";

const ColorForm = ({inUpdate, formikObject}) => {
    const {handleSubmit, values, errors, handleBlur, handleChange, isSubmitting, setFieldValue} = formikObject;
    const isFetching = useSelector(state => state.colorsReducer.show.loading);

    toastLoader(isFetching)

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
                        <SubmitForm isSubmitting={isSubmitting} errors={errors}/>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}
export default ColorForm
