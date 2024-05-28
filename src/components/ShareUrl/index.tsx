"use client";

import React from "react";
import { TbShare2 } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";

const ShareButton = () => {
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("URL copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy URL.");
      });
  };

  return (
    <div>
      <button
        aria-label="share-url"
        onClick={handleShare}
        className="flex items-center justify-center rounded-lg p-2  text-darker-700 hover:bg-darker-100 dark:hover:bg-darker-700 dark:text-white"
      >
        <TbShare2 className="h-6 w-6" />
      </button>
      <Toaster />
    </div>
  );
};
export default ShareButton;
