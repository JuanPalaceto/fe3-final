import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-red-500 dark:text-red-300 mt-6 mb-4">{message}</div>
  );
};

export default ErrorMessage;
