import React from 'react'

const Message = ({ name, email }) => {
    return (
      <div>
        <h2>Thank you, {name}!</h2>
        <h4>We will contact you as soon as possible via e-mail at {email}.</h4>
      </div>
    );
  };

export default Message