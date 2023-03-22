import { categoriesContext } from '../../context/categories.context';
import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../../components/product-card/product-card.component';
import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
const Shop = () => {

  const {categoriesMap} = useContext(categoriesContext);
  console.log(categoriesMap);

  return (
    
    <Container>
      <Row className="no-gutters d-flex">
        {/* {categoriesMap['hats'].map((product) => {
          return(
            <Col key={product.id} xs={3} className='p-3' style={{minWidth:'300px'}}>
              <ProductCard key={product.id} product={product} />
            </Col>
          )
        })} */}

        {
          Object.keys(categoriesMap).map( title =>categoriesMap[title].slice(0,4).map((product) => {
            return(
              <Col key={product.id} xs={3} className='p-3' style={{minWidth:'300px'}}>
                <ProductCard key={product.id} product={product} />
              </Col>
            )}))
        }

      </Row>
    </Container>
  
  )
}

export default Shop