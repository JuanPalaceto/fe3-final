import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Message from "./Message";
import Button from "./Button";


const Form = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hadleName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const hadleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = user;

    //Validations
    if (name.length >= 5 && emailRegex.test(email)) {
      setSubmitted(true);
      setError("");
    } else {
      setSubmitted(false);
      setError("Please verify your information again");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-gray-700 dark:text-gray-100 mb-2">
            Full name:
          </label>
          <input
            type="text"
            value={user.name}
            onChange={hadleName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-900 dark:bg-gray-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email:
          </label>
          <input
            type="text"
            value={user.email}
            onChange={hadleEmail}
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-900 dark:bg-gray-500"
            placeholder="Enter your email"
          />
        </div>
        <Button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white dark:text-gray-50 rounded-md shadow-md hover:bg-gray-800 dark:bg-slate-900 dark:hover:bg-slate-500"
        >
          Submit
        </Button>
      </form>
      {error ? <ErrorMessage message={error} /> : null}
      {submitted ? <Message {...user} /> : null}
    </div>
  );
};

export default Form;
