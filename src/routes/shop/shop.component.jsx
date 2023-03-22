import { ProductsContext } from '../../context/products.context';
import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {

  const {products} = useContext(ProductsContext);

  return (
    
    <Row className="no-gutters -3">
      {products.map((product) => {
        return(
          <Col key={product.id} xs={3} className='p-3'>
            <ProductCard key={product.id} product={product} />
          </Col>
  
        )
      })}
    </Row>
  
  )
}

export default Shop