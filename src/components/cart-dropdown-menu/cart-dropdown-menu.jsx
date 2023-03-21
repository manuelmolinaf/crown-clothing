
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/cart.context';
import CartDropdownMenuItem from '../cart-dropdown-menu-item/cart-dropdown-menu-item';
import { Link } from 'react-router-dom';
import './cart-dropdown-menu.styles.scss';


const CartDropdownMenu = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className='menu-container'>
      <div className='items-container h-75 p-3 overflow-auto'>
        {
          cartItems.map(cartItem => (
            <CartDropdownMenuItem key={cartItem.id} cartItem ={cartItem}/>       
          ))
        }

      </div>
      <div className='h-25 d-flex justify-content-center align-items-center'>
        <Link className='w-75' to='checkout'>
          <Button variant="dark" className='w-100'>Go to Checkout</Button>
        </Link>
      </div>
    </div>
  )
}

export default CartDropdownMenu;