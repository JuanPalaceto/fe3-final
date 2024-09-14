import React from "react";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-500 p-1">
      <div className="text-center mb-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-900 mb-4">
          Want to know more?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Send us your questions and we will contact you
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
