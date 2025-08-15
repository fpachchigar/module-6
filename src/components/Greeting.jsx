import React from 'react';

function Greeting({ name, children }) {
  return (
    <h1 className="greeting">Hello { name} </h1>
  );
}
export default Greeting;