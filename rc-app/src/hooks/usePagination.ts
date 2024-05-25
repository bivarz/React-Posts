import { useState } from "react";

const usePagination = <T>(data: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = data && Math.ceil(data?.length / itemsPerPage);

  const currentItems = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return { currentItems, currentPage, totalPages, paginate };
};

export default usePagination;
