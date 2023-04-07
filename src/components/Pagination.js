const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  onPageChange,
}) => {
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      onPageChange()
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      onPageChange()
    }
  }

  const goToPage = (page) => {
    setCurrentPage(page)
    onPageChange()
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-2 py-1 mx-1 ${
            currentPage === i ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      )
    }
    return pageNumbers
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={previousPage}
        className="px-4 py-2 bg-blue-500 text-white rounded-l hover:bg-blue-600 disabled:bg-gray-500"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex">{renderPageNumbers()}</div>
      <button
        onClick={nextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 disabled:bg-gray-500"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
