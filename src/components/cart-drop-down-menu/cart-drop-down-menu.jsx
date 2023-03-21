import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CartDropDownMenu = () => {

  return (
    <div className='menu-container' style={{
      width: '250px',
      height: '300px'
    }}>
      <div className='h-75 p-3'>
        div 1
      </div>
      <div className='h-25 d-flex justify-content-center align-items-center'>
        <Button variant="dark w-75">Go to Checkout</Button>
      </div>
    </div>
  )
}

export default CartDropDownMenu;