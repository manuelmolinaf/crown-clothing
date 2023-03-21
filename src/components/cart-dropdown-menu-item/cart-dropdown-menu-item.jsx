const CartDropdownMenuItem = ({cartItem} ) => {

  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className='h-50 w-100 d-flex'>
      <div className='w-50 p-1'>
        <img
          src={imageUrl}
          alt={name}
          className='w-100 h-100 rounded'
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </div>
      <div className='w-50 p-1 d-flex-column'>
        <div className='fs-6 fw-bold'>
          {name}
        </div>
        <div className='fst-italic'>
          {quantity + ' x $' + price}
        </div>
      </div>
    </div>
  )

}

export default CartDropdownMenuItem