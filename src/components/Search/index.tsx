"use client";

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../Card";

const Search: React.FC = () => {
  const [gifs, setGifs] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const apiKey = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";

  const fetchGifs = async (searchTerm: string) => {
    const response = await fetch(`/api/giphy?query=${searchTerm}`);
    const data = await response.json();
    setGifs(data.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!apiKey) {
        throw new Error("Giphy API key is not set");
      }

      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`
        );
        const data = await response.json();

        if (!data || !data.data) {
          throw new Error("Failed to fetch data from Giphy API");
        }

        setGifs(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data from Giphy API", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <div className="flex justify-center flex-col gap-2">
        <label className=" text-darker-700  dark:text-white">
          Find your GIF: {query}
        </label>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-96 h-8 p-2 border-0 rounded bg-gray-200 text-darker-700 dark:bg-darker-500 dark:text-white"
          />
          <button className="flex justify-center items-center h-8 w-8 border-0 rounded bg-gray-200 text-darker-700 dark:bg-darker-500 dark:text-white">
            <FaSearch
              data-cy="moon-icon"
              className="h-6 w-5 bg-gray-200 text-darker-700 dark:bg-darker-500 dark:text-white"
            />
          </button>
        </div>
      </div>
      <div
        id="card-wrapper"
        className="flex justify-center max-w-screen-md flex-wrap"
      >
        {gifs?.map((item, idx) => (
          <div key={idx} className="p-4 card-container">
            <div className="relative h-40">
              <img
                src={item.images.original.url}
                alt={item.title}
                className="w-40 h-40 rounded-lg shadow-md bg-gray-200 dark:bg-darker-600 "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
