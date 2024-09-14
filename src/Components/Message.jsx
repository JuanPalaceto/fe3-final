import React from "react";

const Message = ({ name, email }) => {
  return (
    <div className="mt-8 p-4 text-center shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Thank you, {name}!
      </h2>
      <h4 className="text-base text-gray-600 dark:text-gray-300">
        We will contact you as soon as possible via e-mail at {email}.
      </h4>
    </div>
  );
};

export default Message;
