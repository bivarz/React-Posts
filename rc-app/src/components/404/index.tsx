import React from "react";

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div>
        <h1 className="font-extrabold text-9xl text-darker-800 dark:text-darker-50">
          404
        </h1>
      </div>
      <p className="text-2xl mt-4">Ops! Page Not Found</p>
      <p className="mt-1 text-darker-700 dark:text-darker-50">
        The page you are looking for does not exist or has been moved.
      </p>
      <a href="/" className="mt-1 text-buffy-600 hover:underline">
        Go back to homepage
      </a>
    </div>
  );
};

export default Error404;
