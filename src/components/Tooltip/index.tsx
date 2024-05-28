"use client";

import React, { ReactNode, useState } from "react";

interface TooltipProps {
  message: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="text-wrap text-center absolute bottom-full mb-2 min-h-fit w-15 px-2 py-1 bg-opacity-20 bg-gray-700 dark:text-white text-xs rounded shadow-lg top-11 text-darker-700">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
