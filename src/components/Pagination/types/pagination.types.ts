import { Post } from "@/components/DataFetcher/types/datafetcher.types";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  limit: number;
  posts: Post[];
  paginate: (pageNumber: number) => void;
}
