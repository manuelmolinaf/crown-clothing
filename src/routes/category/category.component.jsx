import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () =>{

  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(()=>{
    setProducts(categoriesMap[category]);
  },[category, categoriesMap]);

  return(
    <Fragment>
      <Row className="no-gutters d-flex">
        <Col className='p-3 pb-0 fs-2 fw-bold'>
          {category.toUpperCase()}
        </Col>
      </Row>
      <Row className="no-gutters d-flex">
        {
          products && products.map(product => (
            <Col key={product.id} xs={3} className='p-3' style={{ minWidth: '300px' }}>
              <ProductCard key={product.id} product={product} />
            </Col>
          ))
        }
      </Row>
    </Fragment>
  )

}

export default Category