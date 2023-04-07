const ProductCard = ({ product, addToCart }) => {
  const { thumbnail, title, description, price, rating } = product

  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + '...'
      : description

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="bg-white border rounded-lg p-4 shadow-md flex flex-col h-full">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover object-center mb-4 rounded"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-700">{truncatedDescription}</p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">{formattedPrice}</span>
          <span className="flex items-center">
            <i className="fas fa-star text-yellow-500 mr-1"></i>
            Rating: {rating}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
