
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap/Button';

const CheckoutItem = ({ cartItem }) => {

  const {RemoveItemFromCart, addItemToCart, decreaseCartItemQuantity} = useContext(CartContext)

  const {imageUrl, name, quantity, price} = cartItem;
  
  const removeCartItemHandler = () => {
    RemoveItemFromCart(cartItem);
  }

  const increaseCartItemQuantityHandler = () => addItemToCart(cartItem);
  const decreaseCartItemQuantityHandler = (event) => decreaseCartItemQuantity(cartItem);

  return (

    <Row className='p-3 border-bottom'>
      <Col>
        <img
          src={imageUrl}
          alt={name}
          className='w-100 h-auto rounded'
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </Col>
      <Col className='fw-bold fs-4 d-flex align-items-center justify-content-center'>
        
        {name}
      </Col>
      <Col className='d-flex align-items-center justify-content-center'>
        <FontAwesomeIcon role='button' className='me-2 fs-5' style={{userSelect:'none'}} icon={faChevronLeft} onClick={(event) => decreaseCartItemQuantityHandler(event)} />
        <span className='fs-3'>{quantity}</span>
        <FontAwesomeIcon role='button' className='ms-2 fs-5' style={{userSelect:'none'}} icon={faChevronRight} onClick={increaseCartItemQuantityHandler} />
      </Col>
      <Col className='d-flex align-items-center fs-3 justify-content-center'>
        {'$' + (quantity * price)}
      </Col>

      <Col className='d-flex align-items-center justify-content-center text-danger fs-2'>
        <FontAwesomeIcon role='button' icon={faXmark} onClick={removeCartItemHandler} />
      </Col>
    </Row>

  )

}

export default CheckoutItem