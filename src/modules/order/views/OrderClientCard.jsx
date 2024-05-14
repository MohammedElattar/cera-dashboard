// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

const OrderClientCard = ({name, address, email, phone}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Client Details</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        <Col md='6' sm='12' className='mb-1'>
                            <Label className='form-label'>
                                Name
                            </Label>
                            <Input type='text' disabled value={name}/>
                        </Col>
                        <Col md='6' sm='12' className='mb-1'>
                            <Label className='form-label'>
                                Phone
                            </Label>
                            <Input type='text' disabled value={phone}/>
                        </Col>
                        <Col md='6' sm='12' className='mb-1'>
                            <Label className='form-label'>
                                Email
                            </Label>
                            <Input type='text' disabled value={email}/>
                        </Col>
                        <Col md='6' sm='12' className='mb-1'>
                            <Label className='form-label'>
                                Address
                            </Label>
                            <Input type='text' disabled value={address}/>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}
export default OrderClientCard
