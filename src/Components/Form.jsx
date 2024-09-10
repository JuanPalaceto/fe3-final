import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Message from "./Message";
import Button from "./Button";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full name:</label>
          <input 
          type="text" 
          value={user.name} 
          onChange={hadleName} />
        </div>
        <div>
          <label>Email:</label>
          <input 
          type="text" 
          value={user.email} 
          onChange={hadleEmail} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      {error ? <ErrorMessage message={error} /> : null}
      {submitted ? <Message {...user} /> : null}
    </div>
  );
};

export default Form;
