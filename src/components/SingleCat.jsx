import React from "react";

export default function SingleCat({ cat }) 
{
  return (
    <li style={{ margin: '10px 0' }}>
      <h3>{cat.name}</h3>
      <p><em>{cat.latinName}</em></p>
    </li>
  );
}