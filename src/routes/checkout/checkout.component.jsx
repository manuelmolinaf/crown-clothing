import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Container from 'react-bootstrap/Container';
import CheckoutHeader from '../../components/checkout-header/checkout-header.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Container >
      <CheckoutHeader></CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Row className='p-3 border-bottom border-dark fw-bold fs-4'>
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
        <span className='ms-4'>{'$'+cartTotal}</span>
        </Col>
      </Row>

    </Container>


  )
}

export default Checkout