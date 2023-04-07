const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="w-full mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-300"
      />
    </div>
  )
}

export default SearchBar
