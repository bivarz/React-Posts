type UsePaginationProps = { page: number; limit: number; total: number };

export const ellipsisL = -10;
export const ellipsisR = -20;

const generatePage = (page: number, totalPages: number) => {
  const current = Math.min(page, totalPages);
  const total = Math.max(1, totalPages);

  if (total <= 7) {
    return Array.from({ length: total }).map((_, i) => i + 1);
  }

  if (current < 3) {
    return [1, 2, 3, ellipsisL, total - 1, total];
  }

  if (current === 3) {
    return [1, 2, 3, 4, ellipsisL, total - 1, total];
  }

  if (current > total - 2) {
    return [1, 2, ellipsisR, total - 2, total - 1, total];
  }

  if (current === total - 2) {
    return [1, 2, ellipsisR, total - 3, total - 2, total - 1, total];
  }

  return [1, ellipsisL, current - 1, current, current + 1, ellipsisR, total];
};

export const usePagination = ({ page, limit, total }: UsePaginationProps) => {
  const totalPages = Math.ceil(total / limit);
  const pages = generatePage(page, totalPages);

  const isCurrentPage = (n: number) => n === page;

  return {
    isCurrentPage,
    pages,
  };
};
