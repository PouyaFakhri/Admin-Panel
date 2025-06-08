
function Pagination({ value }) {
  const { page, setPage, totalPages } = value;

  const maxButtons = 5;
  const halfMax = Math.floor(maxButtons / 2);
  let startPage = Math.max(1, page - halfMax);
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination" dir="rtl">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="page-item-nav"
      >
        قبلی 
      </button>

      {pages.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={`page-item ${pageNum === page ? 'active' : ''}`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="page-item-nav"
      >
        بعدی 
      </button>
    </div>
  );
}

export default Pagination;