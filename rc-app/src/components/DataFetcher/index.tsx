"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import Pagination from "../Pagination";
import usePagination from "@/hooks/usePagination";
import PaginationSelector from "../PaginationSelector";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1", 10);

  const { currentItems, currentPage, totalPages, paginate } = usePagination(
    data,
    itemsPerPage
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      router.push(`${pathname}?page=${pageNumber}`);
      paginate(pageNumber);
    },
    [router, pathname, paginate]
  );

  const handleItemsPerPageChange = useCallback(
    (selectedItemsPerPage: number) => {
      setItemsPerPage(selectedItemsPerPage);
    },
    []
  );

  return (
    <div>
      <div className="w-full flex">
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={handlePageChange}
          />
        )}
        <div className="mb-4">
          <PaginationSelector
            itemsPerPage={itemsPerPage}
            onChangeItemsPerPage={handleItemsPerPageChange}
          />
        </div>
      </div>

      <div className="flex justify-center w-full flex-wrap">
        {currentItems?.map((post) => (
          <div key={post?.id} className="p-4">
            <Card imageSrc={""} title={post?.title} description={post?.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
