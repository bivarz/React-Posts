import React from "react";
import Image from "next/image";
import { CardProps } from "./types/card.types";

const Card = ({ imageSrc, title, description }: CardProps) => {
  return (
    <div className="min-w-full max-w-72 min-h-[336px] bg-slate-200 dark:bg-darker-600 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        <Image
          priority={true}
          src={imageSrc}
          alt={title}
          width={288}
          height={160}
          quality={70}
        />
      </div>
      <div className="p-4">
        <h2 className="text-sm font-bold dark:text-white">{title}</h2>
        <p className="text-xs mt-2 text-darker-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
