import {Col, Row} from "reactstrap";
import OrderClientCard from "./OrderClientCard";
import ShowOrderTable from "./ShowOrderTable";

const ShowOrder = ({data}) => {
    const {oneOrder} = data;

    return (
        <Row>
            <Col sm='12'>
                <OrderClientCard name={oneOrder.name} address={oneOrder.address} phone={oneOrder.phone} email={oneOrder.email}/>
            </Col>
            <Col sm='12'>
                <ShowOrderTable data={oneOrder.products}/>
            </Col>
        </Row>
    )
}

export default ShowOrder;