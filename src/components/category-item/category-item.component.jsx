import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const {imageUrl, title} = category;
  const navigate = useNavigate();

  const toCategoryHandler = ()=> {
    navigate(`/shop/${title}`);
  }

  return (
    <div className='category-container rounded border' role='button' onClick={toCategoryHandler}>
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className='category-body-container rounded border'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )

}

export default CategoryItem