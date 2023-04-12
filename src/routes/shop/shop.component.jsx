
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {

  return (

    <Container>
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>}/>
      </Routes>
    </Container>

  )
}

export default Shop