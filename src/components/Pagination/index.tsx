import React from "react";
import { PaginationProps } from "./types/pagination.types";
import { usePagination } from "@/hooks/usePagination";
import PaginationSelector from "@/components/PaginationSelector/index.";

const Pagination = ({
  currentPage,
  limit,
  paginate,
  posts,
}: PaginationProps) => {
  const { pages, isCurrentPage } = usePagination({
    page: currentPage,
    limit,
    total: posts.length,
  });

  return (
    <div className="flex justify-center items-center space-x-2 mb-5">
      <div>
        <ul className="inline-flex -space-x-px text-base h-10 items-center gap-1 ">
          {pages.map((page, idx) => {
            if (page < 0) {
              return (
                <li key={page} className="w-7 h-8 p-2">
                  ...
                </li>
              );
            }

            return (
              <li key={page}>
                <button
                  id={`${idx + 1}`}
                  className={`w-8 h-8 p-2 border-0 rounded flex justify-center items-center ${
                    isCurrentPage(page)
                      ? "hover:bg-darker-800 bg-darker-700 text-slate-50 dark:bg-darker-700 dark:text-darker-50"
                      : "hover:bg-darker-100 bg-gray-200 text-darker-700 dark:bg-darker-500 dark:text-white   "
                  }`}
                  onClick={() => paginate(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <PaginationSelector limit={limit} />
    </div>
  );
};

export default Pagination;
