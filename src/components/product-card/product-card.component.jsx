
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './product-card.styles.scss';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart(product);
    toast.success('Item added to cart!');

  }

  return (

    <Card>
      <Card.Img variant="top" src={imageUrl} style={{ height: '350px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-center m-0'>
          <span className='product-card-name h-auto'>{name}</span>
        </Card.Title>
        <div className='d-flex justify-content-center'>
          <span className='fs-2 fw-bold'>
            {'$' + price}
          </span>
        </div>

        <div className='d-flex justify-content-center mt-3'>
          <Button variant="dark" onClick={addToCartHandler}>
            <FontAwesomeIcon icon={faShoppingBag} className='me-2'></FontAwesomeIcon>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>

  );
};

export default ProductCard;