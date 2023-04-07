const ShoppingCart = ({ cartItems, total }) => {
  return (
    <div className="fixed top-0 right-0 bg-white p-4 shadow-md">
      <div className="flex items-center">
        <i className="fas fa-shopping-cart text-xl mr-2"></i>
        <span className="text-lg font-semibold">{cartItems.length} items</span>
      </div>
      <div className="text-sm font-semibold mt-2">
        Total:{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(total)}
      </div>
    </div>
  )
}

export default ShoppingCart
