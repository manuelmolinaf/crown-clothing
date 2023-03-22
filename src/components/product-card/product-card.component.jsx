
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './product-card.styles.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart(product);
  }

  return (
    // <div className='product-card-container'>
    //   <img className='rounded' src={imageUrl} alt={`${name}`} />
    //   <div className='footer'>
    //     <span className='name'>{name}</span>
    //     <span className='price'>{price}</span>
    //   </div>
    //   <Button buttonType='inverted' onClick={addToCartHandler}>Add to cart</Button>
    // </div>

    <Card>
      <Card.Img variant="top" src={imageUrl} style={{height:'360px', width:'100%', objectFit:'cover'}} />
      <Card.Body>
        <div className='d-flex flex-wrap align-items-center'>
          <span className='fs-4 fw-bold'>
            {name}
          </span>
          <span className='fs-4 fw-bold ms-3 text-success'>
          {'$'+price}
          </span>

          <div className='ms-auto'>
            <Button variant="dark" onClick={addToCartHandler}>
              <FontAwesomeIcon icon={faCartShopping} className='me-2'></FontAwesomeIcon>
              Add to cart
            </Button>
          </div>
          
        </div>
        <div className='d-flex justify-content-center'>
          
        </div>
      </Card.Body>
    </Card>

  );
};

export default ProductCard;