import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from '../product-card/product-card.component';
import { Link } from "react-router-dom";

const CategoryPreview = ({title, products}) => {

  return (
    <Fragment>
      <Row className="no-gutters d-flex">
        <Col className='p-3 pb-0 fs-2 fw-bold'>
          <Link className='text-decoration-none text-dark' to={title}>{title.toUpperCase()}</Link>
        </Col>
      </Row>
      <Row className="no-gutters d-flex">
        {
          products.slice(0, 4).map(product => (
            <Col key={product.id} xs={3} className='p-3' style={{ minWidth: '300px' }}>
              <ProductCard key={product.id} product={product} />
            </Col>
          ))
        }
      </Row>
    </Fragment>
  )
}

export default CategoryPreview