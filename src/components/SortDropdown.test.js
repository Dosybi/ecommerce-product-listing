import { render, screen, fireEvent } from '@testing-library/react'
import SortDropdown from './SortDropdown'

test('renders sort dropdown and handles selection', () => {
  const mockSetSorting = jest.fn()
  render(<SortDropdown sorting="" setSorting={mockSetSorting} />)

  const dropdownElement = screen.getByRole('combobox')
  expect(dropdownElement).toBeInTheDocument()

  fireEvent.change(dropdownElement, { target: { value: 'price-asc' } })
  expect(mockSetSorting).toHaveBeenCalledWith('price-asc')
})
