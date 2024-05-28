"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-darker-100 dark:hover:bg-zinc-700"
        onClick={() => toggleTheme()}
        data-cy="theme-toggle-button"
      >
        {theme === "dark" ? (
          <MdOutlineWbSunny
            data-cy="sun-icon"
            className="h-6 w-6 text-orange-300"
          />
        ) : (
          <FaMoon data-cy="moon-icon" className="h-6 w-5 text-darker-700" />
        )}
      </button>
    </div>
  );
};

export default React.memo(ThemeToggle);
