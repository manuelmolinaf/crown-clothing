import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () =>{

  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(()=>{
    setProducts(categoriesMap[category]);
  },[category, categoriesMap]);

  return(
    <Fragment>
      <Row className="no-gutters">
        <Col className='p-3 pb-0 fs-1 fw-bold  d-flex justify-content-center'>
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