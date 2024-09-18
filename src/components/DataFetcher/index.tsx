"use client";

import React, { Suspense, useEffect, useState, lazy, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
const Pagination = lazy(() => import("../Pagination"));
const Card = lazy(() => import("../Card"));
import { fetchData } from "@/data/api";
import { DataFetcherProps, Post } from "./types/datafetcher.types";
import Error404 from "../404";
import { useTheme } from "@/context/theme-context";

const DataFetcher = ({ initialPage }: DataFetcherProps) => {
  const router = useRouter();
  const { theme } = useTheme();
  const searchParams = useSearchParams();

  const LimitParam = useMemo(
    () => parseInt(searchParams?.get("limit") || "10"),
    [searchParams]
  );
  const pageNumber = useMemo(
    () => parseInt(searchParams?.get("page") || initialPage.toString()),
    [searchParams, initialPage]
  );

  const [data, setData] = useState<Post[]>([]);
  const [limit, setLimit] = useState(LimitParam);

  useEffect(() => {
    setLimit(LimitParam);
  }, [LimitParam]);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const posts = await fetchData<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsWithImages = posts.map((post, index) => ({
          ...post,
          imageUrl: `https://picsum.photos/seed/${index + 1}/288/160`,
        }));
        setData(postsWithImages);
      } catch (error) {
        console.error("Error fetching data, datafetcher component", error);
      }
    };
    fetchRequest();
  }, []);

  const paginate = (page: number) => {
    router.push(`?page=${page}&limit=${limit}`);
  };

  const startIndex = (pageNumber - 1) * limit;
  const selectedPosts = useMemo(
    () => data.slice(startIndex, startIndex + limit),
    [data, startIndex, limit]
  );

  const showError = data.length > 0 && pageNumber * limit > data.length + 5;
  const showPagination =
    data.length > 0 && pageNumber * limit <= data.length + 5;

  return (
    <div
      className={`p-4 ${
        theme === "dark"
          ? "bg-darker-900 text-white"
          : "bg-slate-50 text-darker-900"
      }`}
    >
      <link rel="dns-prefetch" href="https://jsonplaceholder.typicode.com" />
      <link rel="preconnect" href="https://jsonplaceholder.typicode.com" />

      <Suspense fallback={<p>Loading...</p>}>
        {showError && <Error404 />}
        <div className="w-full flex justify-center">
          {showPagination && (
            <Pagination
              totalPages={Math.ceil(data.length / limit)}
              currentPage={pageNumber}
              paginate={paginate}
              limit={limit}
              posts={data}
            />
          )}
        </div>
      </Suspense>
      <div id="card-wrapper" className="flex justify-center w-full flex-wrap">
        {selectedPosts.map((post) => (
          <div key={post.id} className="p-4 card-container">
            <Card
              imageSrc={post.imageUrl}
              title={post.title}
              description={post.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DataFetcher);
