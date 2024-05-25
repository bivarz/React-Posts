"use client";

import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "../card";
import Pagination from "../pagination";
import PaginationSelector from "../paginationselector";
import usePagination from "@/hooks/usePagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fetchData } from "@/data/api";
import { DataFetcherProps, Post } from "./types/datafetcher.types";

const DataFetcher: React.FC<DataFetcherProps> = ({ initialPage }) => {
  const [data, setData] = useState<Post[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = parseInt(
    searchParams?.get("page") || initialPage.toString(),
    10
  );

  const { currentItems, currentPage, totalPages, paginate } = usePagination(
    data,
    itemsPerPage,
    page
  );

  useEffect(() => {
    if (data.length === 0) {
      const fetchRequest = async () => {
        try {
          const posts = await fetchData<Post[]>(
            "https://jsonplaceholder.typicode.com/posts"
          );
          setData(posts);
        } catch (error) {
          console.log("Error fetching data,datafetcher component", error);
        }
      };
      fetchRequest();
    }
  }, [data]);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      router.push(`?page=${pageNumber}`);
      paginate(pageNumber);
    },
    [router, pathname, paginate]
  );

  const handleItemsPerPageChange = (selectedItemsPerPage: number) => {
    setItemsPerPage(selectedItemsPerPage);
  };

  return (
    <div>
      <div className="mb-4">
        <PaginationSelector
          itemsPerPage={itemsPerPage}
          onChangeItemsPerPage={handleItemsPerPageChange}
        />
      </div>

      <div className="w-full flex justify-center mb-4">
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={handlePageChange}
          />
        )}
      </div>

      <div className="flex justify-center w-full flex-wrap">
        {currentItems.map((post) => (
          <div key={post.id} className="p-4">
            <Card imageSrc={""} title={post.title} description={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
