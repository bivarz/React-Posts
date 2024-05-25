import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="min-w-full max-w-80 min-h-80 bg-white dark:bg-darker-600 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        <Image
          src="https://images.unsplash.com/photo-1714621512927-a9a52d1b663d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-sm font-bold dark:text-white">{title}</h2>
        <p className="text-xs mt-2 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
