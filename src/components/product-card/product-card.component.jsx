
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

    <Card>
      <Card.Img variant="top" src={imageUrl} style={{ height: '360px', width: '100%', objectFit: 'cover' }} />
      <Card.Body>
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
              <FontAwesomeIcon icon={faCartShopping} className='me-2'></FontAwesomeIcon>
              Add to cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>

  );
};

export default ProductCard;