
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './product-card.styles.scss';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart(product);
  }

  return (

    <Card>
      <img variant="top" src={imageUrl} style={{ height: '350px', width: '100%', objectFit: 'cover' }} />
      <Card.Body className='w-auto'>
        <Card.Title className='d-flex fs-4 align-items-center'>
          <span>
            {name}
          </span>
        </Card.Title>
        <div className='d-flex align-items-center'>
          <span className='ms-2 fs-3 fw-bold'>
            {'$' + price}
          </span>

          <div className='ms-auto'>
            <Button variant="dark" onClick={addToCartHandler}>
              <FontAwesomeIcon icon={faShoppingBag} className='me-2'></FontAwesomeIcon>
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>

  );
};

export default ProductCard;