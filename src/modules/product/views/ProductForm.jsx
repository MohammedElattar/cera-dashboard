import {useSelector} from "react-redux";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, Input, Label, Row} from "reactstrap";
import CustomTextInput from "../../../components/form/CustomInput";
import SubmitForm from "../../../components/form/SubmitForm";
import IntegerNumberInput from "../../../components/form/elements/numberInput/IntegerNumberInput";
import DecimalNumberInput from "../../../components/form/elements/numberInput/DecimalNumberInput";
import TextAreaComponent from "../../../components/form/elements/TextAreaComponent";
import MultiSelectComponent from "../../../components/form/elements/select/MultiSelectComponent";
import Repeater from "../../../@core/components/repeater";
import {useEffect, useState} from "react";
import {Plus, X} from "react-feather";
import SlideDown from "react-slidedown";
import ErrorBox from "../../../components/form/ErrorBox";

const ProductForm = ({inUpdate, formikObject, data, setImage}) => {
    const {handleSubmit, values, errors, handleBlur, handleChange, isSubmitting, setFieldValue} = formikObject;
    const isFetching = useSelector(state => state.colorsReducer.show.loading);

    const [count, setCount] = useState(values?.sizes?.length || 1)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const deleteForm = e => {
        e.preventDefault()
        const slideDownWrapper = e.target.closest('.react-slidedown'),
            form = e.target.closest('form')
        if (slideDownWrapper) {
            slideDownWrapper.remove()
        } else {
            form.remove()
        }
    }

    useEffect(() => {
        const tmpCount = values.sizes.length;

        if (tmpCount) {
            setCount(tmpCount)
        }
    }, [values.sizes]);
    toastLoader(isFetching)

    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>{inUpdate ? 'Update' : 'Add'} Product</CardTitle>
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
                                value={values.name}
                                invalid={errors.name && true}
                                error={errors.name}
                            />
                        </Col>
                        <Col sm='12' className='mb-1'>
                            <Label className='form-label' for='quantity'>
                                Quantity
                            </Label>
                            <IntegerNumberInput
                                onBlur={handleBlur}
                                value={values.quantity}
                                id={'quantity'}
                                error={errors.quantity}
                                onChange={(value) => setFieldValue('quantity', value)}
                            />
                        </Col>
                        <Col sm='12' className='mb-1'>
                            <Label className='form-label' for='price'>
                                Price
                            </Label>
                            <DecimalNumberInput
                                onBlur={handleBlur}
                                value={values.price}
                                defaultValue={values.price}
                                id={'price'}
                                error={errors.price}
                                onChange={(value) => setFieldValue('price', value)}
                            />
                        </Col>
                        <Col sm='12' className='mb-1'>
                            <Label className='form-label' for='description'>
                                Description
                            </Label>
                            <TextAreaComponent
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name='description'
                                id='description'
                                value={values.description}
                                invalid={errors.description && true}
                                error={errors.description}
                            />
                        </Col>
                        <Col sm='12' className='mb-1'>
                            <Label className='form-label' for='image'>
                                Image file
                            </Label>
                            <Input
                                type='file'
                                id='image'
                                name='image'
                                onChange={e => setImage(e.target.files[0] || null)}
                            />
                            <ErrorBox message={errors.image}/>
                        </Col>
                        <Col sm='12' className='mb-1'>
                            <Label className='form-label' for='colors'>
                                Colors
                            </Label>
                            <MultiSelectComponent
                                options={data.colorsMenu}
                                value={values.colors}
                                id='colors'
                                onChange={(selected) => setFieldValue('colors', selected)}
                            />
                        </Col>
                        <Col sm='12' className='mb-1'>
                            <Label className='form-label' for='colors'>
                                Sizes
                            </Label>
                            <Repeater count={count}>
                                {i => {
                                    const Tag = i === 0 ? 'div' : SlideDown
                                    return (
                                        <Tag key={i}>
                                            <Form>
                                                <Row className='justify-content-between align-items-center'>
                                                    <Col md={4} className='mb-md-0 mb-1'>
                                                        <IntegerNumberInput
                                                            value={values.sizes[i]}
                                                            defaultValue={values.sizes[i]}
                                                            onChange={(value) => {
                                                                const sizes = [...values.sizes]
                                                                sizes[i] = value;
                                                                setFieldValue('sizes', sizes);
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col md={2}>
                                                        <Button color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                                                            <X size={14} className='me-50' />
                                                            <span>Delete</span>
                                                        </Button>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <hr />
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Tag>
                                    )
                                }}
                            </Repeater>
                            <Button className='btn-icon' color='primary' onClick={increaseCount}>
                                <Plus size={14} />
                                <span className='align-middle ms-25'>Add New</span>
                            </Button>
                        </Col>
                        <SubmitForm isSubmitting={isSubmitting} errors={errors}/>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}

export default ProductForm;