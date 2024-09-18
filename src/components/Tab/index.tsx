"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import Search from "../Search";
const DataFetcher = dynamic(() => import("@/components/DataFetcher"));

const Tab: React.FC = () => {
  const [isSelected, setSelected] = useState("cards");
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setSelected("cards")}
          className={`w-16 h-8 p-2 border-0 rounded flex justify-center items-center ${
            isSelected === "cards"
              ? "hover:bg-darker-800 bg-darker-700 text-slate-50 dark:bg-darker-700 dark:text-darker-50"
              : "hover:bg-darker-100 bg-gray-200 text-darker-700 dark:bg-darker-500 dark:text-white   "
          }`}
        >
          Cards
        </button>
        <button
          onClick={() => setSelected("GIPHY")}
          className={`w-16 h-8 p-2 border-0 rounded flex justify-center items-center ${
            isSelected === "GIPHY"
              ? "hover:bg-darker-800 bg-darker-700 text-slate-50 dark:bg-darker-700 dark:text-darker-50"
              : "hover:bg-darker-100 bg-gray-200 text-darker-700 dark:bg-darker-500 dark:text-white   "
          }`}
        >
          GIPHY
        </button>
      </div>
      <div className="mt-5">
        {isSelected === "cards" ? <DataFetcher initialPage={1} /> : <Search />}
      </div>
    </div>
  );
};

export default Tab;
