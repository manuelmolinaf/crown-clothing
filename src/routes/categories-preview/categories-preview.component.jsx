import { Container } from 'react-bootstrap';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategoriesMap);

  return (

    <Container>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          return(
       
          <CategoryPreview key={title} title={title} products={products}/>
        )})
      }
    </Container>

  )
}

export default CategoriesPreview