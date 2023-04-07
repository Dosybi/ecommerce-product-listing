import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'Test Product Description',
  price: 99.99,
  currency: 'USD',
  thumbnail: 'https://via.placeholder.com/200',
  rating: 4.5,
}

test('renders product card with provided data', () => {
  render(<ProductCard product={mockProduct} />)

  const titleElement = screen.getByRole('heading', { name: /Test Product/i })
  expect(titleElement).toBeInTheDocument()

  expect(screen.getByText(/Test Product Description/i)).toBeInTheDocument()
  expect(screen.getByText(/99.99/i)).toBeInTheDocument()
  expect(screen.getByText(/4.5/i)).toBeInTheDocument()
  expect(screen.getByRole('img')).toHaveAttribute(
    'src',
    'https://via.placeholder.com/200'
  )
})
