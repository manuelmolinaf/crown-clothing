import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Container from 'react-bootstrap/Container';
import CheckoutHeader from '../../components/checkout-header/checkout-header.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <Container >
      <CheckoutHeader></CheckoutHeader>
      {cartItems.map((cartItem) => (    
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))}

    </Container>


  )
}

export default Checkout