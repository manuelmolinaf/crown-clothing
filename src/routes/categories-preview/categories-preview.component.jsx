import { CategoriesContext } from '../../context/categories.context';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesContext);


  return (

    <Container>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          return(
       
          <CategoryPreview title={title} products={products}/>
        )})
      }
    </Container>

  )
}

export default CategoriesPreview