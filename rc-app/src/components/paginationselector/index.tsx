import React from "react";
import { PaginationSelectorProps } from "./types/paginationselector.types";

const PaginationSelector: React.FC<PaginationSelectorProps> = ({
  itemsPerPage,
  onChangeItemsPerPage,
}) => {
  return (
    <div className="flex items-center">
      <label htmlFor="itemsPerPage" className="mr-2">
        Items per page:
      </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={(e) => onChangeItemsPerPage(parseInt(e.target.value, 10))}
        className="px-2 py-1 border rounded text-darker-500"
      >
        <option className="text-darker-500" value={5}>
          5
        </option>
        <option className="text-darker-500" value={10}>
          10
        </option>
        <option className="text-darker-500" value={15}>
          15
        </option>
        <option className="text-darker-500" value={25}>
          25
        </option>
      </select>
    </div>
  );
};

export default PaginationSelector;
