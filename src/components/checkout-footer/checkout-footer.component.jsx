import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CheckoutFooter = () => {

  const {cartTotal} = useContext(CartContext);

  return (
    <Row className='p-3 border-top border-dark fw-bold fs-4'>
      <Col className='d-flex align-items-center justify-content-center'>

      </Col>
      <Col className='d-flex align-items-center justify-content-center'>

      </Col>
      <Col className='d-flex align-items-center justify-content-center'>

      </Col>
      <Col className='d-flex align-items-center justify-content-end'>

      </Col>
      <Col className='d-flex align-items-center justify-content-center'>
        <span>Total:</span>
        <span className='ms-4'>{'$' + cartTotal}</span>
      </Col>
    </Row>
  )
};

export default CheckoutFooter