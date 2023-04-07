import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ProductListing from './components/ProductListing'
import SearchBar from './components/SearchBar'
import ShoppingCart from './components/ShoppingCart'
import Pagination from './components/Pagination'
import SortDropdown from './components/SortDropdown'

const App = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sorting, setSorting] = useState('')
  const productListRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
      setTotalPages(Math.ceil(response.data.products.length / 10))
    }

    fetchData()
  }, [])

  useEffect(() => {
    const lowerCasedSearchQuery = searchQuery.toLowerCase()
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(lowerCasedSearchQuery)
    )

    setFilteredProducts(filtered)
    setCurrentPage(1)
    setTotalPages(Math.ceil(filtered.length / 10))
  }, [searchQuery, products])

  const sortProducts = (a, b) => {
    if (sorting === 'price-asc') {
      return a.price - b.price
    } else if (sorting === 'price-desc') {
      return b.price - a.price
    } else if (sorting === 'rating-asc') {
      return a.rating - b.rating
    } else if (sorting === 'rating-desc') {
      return b.rating - a.rating
    }
    return 0
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const onPageChange = () => {
    setTimeout(() => {
      productListRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const sortedProducts = filteredProducts.slice().sort(sortProducts)

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  )

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="container mx-auto px-4 py-6">
      <ShoppingCart cartItems={cartItems} total={total} />
      <div className="mb-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortDropdown sorting={sorting} setSorting={setSorting} />
      </div>
      <div ref={productListRef}>
        <ProductListing products={paginatedProducts} addToCart={addToCart} />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default App
