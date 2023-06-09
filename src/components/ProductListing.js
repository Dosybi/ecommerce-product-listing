import ProductCard from './ProductCard'

const ProductListing = ({ products, addToCart }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductListing
