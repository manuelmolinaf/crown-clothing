import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CheckoutHeader = () => (
  <Row className='p-3 border-bottom border-dark fw-bold fs-4'>
    <Col className='d-flex align-items-center justify-content-center'>
      Product
    </Col>
    <Col className='d-flex align-items-center justify-content-center'>
      Description
    </Col>
    <Col className='d-flex align-items-center justify-content-center'>
      Quantity
    </Col>
    <Col className='d-flex align-items-center justify-content-center'>
      Price
    </Col>
    <Col className='d-flex align-items-center justify-content-center'>
      Remove
    </Col>
  </Row>
);

export default CheckoutHeader