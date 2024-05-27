import React from "react";
import { PaginationSelectorProps } from "./types/paginationselector.types";
import { useRouter } from "next/navigation";

const PaginationSelector = ({ limit }: PaginationSelectorProps) => {
  const router = useRouter();

  const handleChangeLimit = (v: number) => {
    router.push(`/?page=1&limit=${v}`);
  };
  return (
    <div className="flex items-center">
      <select
        aria-label="select-limit"
        id="pagination-limit"
        value={limit}
        onChange={(e) => handleChangeLimit(parseInt(e.target.value))}
        className="px-2 h-8 py-1 border-[1px] border-darker-300 dark:border-0 rounded bg-slate-50 text-darker-900 dark:bg-darker-400 dark:text-slate-50"
      >
        <option className="text-darker-500 dark:text-slate-50" value={5}>
          5
        </option>
        <option className="text-darker-500 dark:text-slate-50" value={10}>
          10
        </option>
        <option className="text-darker-500 dark:text-slate-50" value={15}>
          15
        </option>
        <option className="text-darker-500 dark:text-slate-50" value={25}>
          25
        </option>
      </select>
    </div>
  );
};

export default PaginationSelector;
