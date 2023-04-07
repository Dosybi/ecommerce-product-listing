import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'

test('renders search bar and handles input', () => {
  const mockSetSearchQuery = jest.fn()
  render(<SearchBar searchQuery="" setSearchQuery={mockSetSearchQuery} />)

  const inputElement = screen.getByPlaceholderText(/search products/i)
  expect(inputElement).toBeInTheDocument()

  fireEvent.change(inputElement, { target: { value: 'test' } })
  expect(mockSetSearchQuery).toHaveBeenCalledWith('test')
})
