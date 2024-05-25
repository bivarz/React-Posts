import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { PaginationProps } from "./types/pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  paginate,
}) => {
  const maxPagesToShow = 5;
  const router = useRouter();
  const pathname = usePathname();

  const handlePaginate = (pageNumber: number) => {
    paginate(pageNumber);
  };

  const renderPageNumbers = () => {
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2);
        endPage = currentPage + Math.floor(maxPagesToShow / 2);
      }
    }

    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePaginate(i)}
          className={`px-2 py-1 mx-1 border rounded ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <>
        {startPage > 1 && (
          <button
            onClick={() => handlePaginate(startPage - maxPagesToShow)}
            className="px-2 py-1 mx-1 border rounded bg-white text-blue-500"
          >
            ...
          </button>
        )}
        {pageNumbers}
        {endPage < totalPages && (
          <button
            onClick={() => handlePaginate(endPage + 1)}
            className="px-2 py-1 mx-1 border rounded bg-white text-blue-500"
          >
            ...
          </button>
        )}
      </>
    );
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => handlePaginate(1)}
        className={`px-2 py-1 mx-1 border rounded ${
          currentPage === 1 ? "bg-gray-300" : "bg-white text-blue-500"
        }`}
      >
        {"<<"}
      </button>
      <button
        onClick={() => handlePaginate(currentPage - 1)}
        className={`px-2 py-1 mx-1 border rounded ${
          currentPage === 1 ? "bg-gray-300" : "bg-white text-blue-500"
        }`}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePaginate(currentPage + 1)}
        className={`px-2 py-1 mx-1 border rounded ${
          currentPage === totalPages ? "bg-gray-300" : "bg-white text-blue-500"
        }`}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
      <button
        onClick={() => handlePaginate(totalPages)}
        className={`px-2 py-1 mx-1 border rounded ${
          currentPage === totalPages ? "bg-gray-300" : "bg-white text-blue-500"
        }`}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
