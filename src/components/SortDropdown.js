const SortDropdown = ({ sorting, setSorting }) => {
  return (
    <select
      value={sorting}
      onChange={(e) => setSorting(e.target.value)}
      className="text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <option value="">Sort by</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-desc">Price (High to Low)</option>
      <option value="rating-asc">Rating (Low to High)</option>
      <option value="rating-desc">Rating (High to Low)</option>
    </select>
  )
}

export default SortDropdown
