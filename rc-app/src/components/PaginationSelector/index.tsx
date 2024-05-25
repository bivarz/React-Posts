import React from "react";

interface PaginationSelectorProps {
  itemsPerPage: number;
  onChangeItemsPerPage: (itemsPerPage: number) => void;
}

const PaginationSelector: React.FC<PaginationSelectorProps> = ({
  itemsPerPage,
  onChangeItemsPerPage,
}) => {
  const options = [5, 10, 15, 25];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value);
    onChangeItemsPerPage(selectedValue);
  };

  return (
    <div>
      <label htmlFor="itemsPerPage">Itens por página:</label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={handleChange}
        className="ml-2 px-2 py-1 border rounded"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaginationSelector;
