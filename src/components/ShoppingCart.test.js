import { render, screen } from '@testing-library/react'
import ShoppingCart from './ShoppingCart'

test('renders shopping cart with total and item count', () => {
  const mockCartItems = [
    { id: 1, title: 'Test Product', price: 99.99 },
    { id: 2, title: 'Test Product 2', price: 49.99 },
  ]

  render(<ShoppingCart cartItems={mockCartItems} total={149.98} />)

  expect(screen.getByText(/2 items/i)).toBeInTheDocument()
  expect(screen.getByText(/149.98/i)).toBeInTheDocument()
})
