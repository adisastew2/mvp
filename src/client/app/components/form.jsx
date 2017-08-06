import React from 'react';

function Form(props) {
  return (
    <div>
      <input placeholder="name"/>
      <input placeholder="message"/>
      <button>Submit</button>
      <button>Show Messages</button>
    </div>
  );
}

export default Form;